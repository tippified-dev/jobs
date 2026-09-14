-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('SKILLED', 'UNSKILLED');

-- CreateTable
CREATE TABLE "JobCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryType" "CategoryType" NOT NULL,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "icon" TEXT,
    "isRemote" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobCategory_slug_key" ON "JobCategory"("slug");

-- CreateIndex
CREATE INDEX "JobCategory_categoryType_idx" ON "JobCategory"("categoryType");

-- CreateIndex
CREATE INDEX "JobCategory_isActive_idx" ON "JobCategory"("isActive");

-- CreateIndex
CREATE INDEX "JobCategory_sortOrder_idx" ON "JobCategory"("sortOrder");
