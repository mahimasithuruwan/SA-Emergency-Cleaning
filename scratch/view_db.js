import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('=== ORGANIZATIONS ===');
  const orgs = await prisma.organization.findMany({ include: { locations: true } });
  console.log(JSON.stringify(orgs, null, 2));

  console.log('\n=== TECHNICIANS ===');
  const techs = await prisma.technician.findMany();
  console.log(JSON.stringify(techs, null, 2));

  console.log('\n=== EMERGENCY REQUESTS ===');
  const jobs = await prisma.emergencyRequest.findMany();
  console.log(JSON.stringify(jobs, null, 2));

  console.log('\n=== REDEMPTION REQUESTS ===');
  const redemptions = await prisma.redemptionRequest.findMany();
  console.log(JSON.stringify(redemptions, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
