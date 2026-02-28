import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

/**
 * POST /api/revalidate
 * Called by admin panel after any product/category mutation.
 * Triggers ISR revalidation for the public catalog page.
 */
export async function POST() {
  try {
    revalidatePath("/")
    revalidatePath("/", "layout")
    return NextResponse.json({ revalidated: true })
  } catch {
    return NextResponse.json({ revalidated: false }, { status: 500 })
  }
}
