import prisma from '@/lib/prisma'

export async function logActivity(
  action: string,
  entityType: string | null,
  entityId: number | null,
  userId: number | null,
  details?: string | null,
  ipAddress?: string | null,
) {
  try {
    await prisma.activityLog.create({
      data: {
        action,
        entityType,
        entityId,
        adminUserId: userId,
        details,
        ipAddress: ipAddress || null,
      },
    })
  } catch (err) {
    console.error('Failed to log activity:', err)
  }
}
