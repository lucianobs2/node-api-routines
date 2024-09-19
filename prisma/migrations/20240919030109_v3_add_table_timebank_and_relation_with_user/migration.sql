-- CreateEnum
CREATE TYPE "TimeBankCategory" AS ENUM ('EMERGENCY_2X', 'EMERGENCY_1X', 'NORMAL');

-- CreateTable
CREATE TABLE "TimeBank" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timeBankCategory" "TimeBankCategory" NOT NULL DEFAULT 'NORMAL',

    CONSTRAINT "TimeBank_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TimeBank" ADD CONSTRAINT "TimeBank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
