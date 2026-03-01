import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { isSupabaseMockMode } from '@/lib/mock-data'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const required = [
      'user_id',
      'user_email',
      'full_name',
      'phone',
      'delivery_address',
      'area',
      'delivery_fee',
      'items',
      'subtotal',
      'total',
    ]
    for (const field of required) {
      if (body[field] === undefined || body[field] === null || body[field] === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // In mock mode, return a fake order ID
    if (isSupabaseMockMode()) {
      return NextResponse.json({ id: 'mock-order-' + Date.now() })
    }

    const supabase = await createServiceClient()
    const { data, error } = await supabase
      .from('orders')
      .insert({
        user_id: body.user_id,
        user_email: body.user_email,
        full_name: body.full_name,
        phone: body.phone,
        delivery_address: body.delivery_address,
        city: body.city ?? null,
        area: body.area,
        delivery_fee: body.delivery_fee,
        order_notes: body.order_notes ?? null,
        items: body.items,
        subtotal: body.subtotal,
        total: body.total,
        status: 'pending',
      })
      .select('id')
      .single()

    if (error) {
      console.error('Order insert error:', error)
      return NextResponse.json({ error: 'Failed to save order' }, { status: 500 })
    }

    return NextResponse.json({ id: data.id })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
