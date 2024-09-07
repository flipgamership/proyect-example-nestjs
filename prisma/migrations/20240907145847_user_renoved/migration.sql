-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT
);

-- CreateTable
CREATE TABLE "Diary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title_product" TEXT NOT NULL,
    "description_product" TEXT NOT NULL,
    "image_product" TEXT NOT NULL,
    "price_product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "min_alert_storages" INTEGER NOT NULL,
    "codeBar_product" TEXT NOT NULL,
    "extra_product_information" TEXT NOT NULL,
    "internal_product_information" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InventoryHistorySales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "quantity_sale" INTEGER NOT NULL,
    "product_status" TEXT NOT NULL,
    "product_guie" TEXT NOT NULL,
    "product_extra_information" TEXT NOT NULL,
    CONSTRAINT "InventoryHistorySales_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "shippingProducts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "guie" TEXT NOT NULL,
    "shipping_company" TEXT NOT NULL,
    "date_shipping" DATETIME NOT NULL,
    "direction_shipping" TEXT NOT NULL,
    "info_shipping" TEXT NOT NULL,
    "status_shipping" TEXT NOT NULL,
    CONSTRAINT "shippingProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
