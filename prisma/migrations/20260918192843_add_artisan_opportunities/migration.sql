-- CreateTable
CREATE TABLE "ArtisanCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArtisanCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtisanOpportunity" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT,
    "jobType" TEXT,
    "salary" TEXT,
    "applicationUrl" TEXT,
    "categoryId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArtisanOpportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArtisanCategory_slug_key" ON "ArtisanCategory"("slug");

-- CreateIndex
CREATE INDEX "ArtisanCategory_country_idx" ON "ArtisanCategory"("country");

-- CreateIndex
CREATE INDEX "ArtisanCategory_isActive_idx" ON "ArtisanCategory"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ArtisanOpportunity_slug_key" ON "ArtisanOpportunity"("slug");

-- CreateIndex
CREATE INDEX "ArtisanOpportunity_categoryId_idx" ON "ArtisanOpportunity"("categoryId");

-- CreateIndex
CREATE INDEX "ArtisanOpportunity_country_idx" ON "ArtisanOpportunity"("country");

-- CreateIndex
CREATE INDEX "ArtisanOpportunity_isActive_idx" ON "ArtisanOpportunity"("isActive");

-- AddForeignKey
ALTER TABLE "ArtisanOpportunity" ADD CONSTRAINT "ArtisanOpportunity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ArtisanCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
