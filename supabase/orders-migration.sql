-- ============================================================
-- ENCHANTED STYLE — Orders table migration
-- Run this in Supabase SQL Editor AFTER schema.sql
-- ============================================================

CREATE TABLE IF NOT EXISTS orders (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES auth.users ON DELETE SET NULL,
  user_email       TEXT NOT NULL,
  full_name        TEXT NOT NULL,
  phone            TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  city             TEXT,
  area             TEXT NOT NULL CHECK (area IN ('beirut', 'outside')),
  delivery_fee     NUMERIC(10,2) NOT NULL,
  order_notes      TEXT,
  items            JSONB NOT NULL,
  subtotal         NUMERIC(10,2) NOT NULL,
  total            NUMERIC(10,2) NOT NULL,
  status           TEXT NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending', 'confirmed', 'delivered', 'cancelled')),
  created_at       TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Authenticated users can insert their own orders
CREATE POLICY "Users can insert own orders" ON orders
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Authenticated users can read only their own orders
CREATE POLICY "Users can read own orders" ON orders
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- Service role bypasses RLS automatically (no policy needed)
