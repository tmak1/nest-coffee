-- CreateTable
CREATE TABLE "coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT,

    CONSTRAINT "coffee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavour" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coffeeId" TEXT NOT NULL,

    CONSTRAINT "flavour_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coffee_name_key" ON "coffee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "flavour_name_key" ON "flavour"("name");

-- AddForeignKey
ALTER TABLE "flavour" ADD CONSTRAINT "flavour_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
