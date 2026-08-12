import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearAllRequests() {
  console.log('Clearing all emergency requests from database...');
  const deletedJobs = await prisma.emergencyRequest.deleteMany({});
  console.log(`Deleted ${deletedJobs.count} emergency requests.`);

  const resetOrgs = await prisma.organization.updateMany({
    data: { calloutsUsed: 0 }
  });
  console.log(`Reset calloutsUsed count to 0 for ${resetOrgs.count} organizations.`);
}

clearAllRequests()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
