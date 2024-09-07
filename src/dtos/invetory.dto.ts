import { ApiProperty } from '@nestjs/swagger';
import { InventoryHistorySalesDto } from './inventoryHistorySales.dto';
import { ShippingProductsDto } from './shippingProducts.dto';

export class CreateInventoryDto {
  @ApiProperty({ description: 'Title of the product' })
  title_product: string;

  @ApiProperty({ description: 'Description of the product' })
  description_product: string;

  @ApiProperty({ description: 'Image URL of the product' })
  image_product: string;

  @ApiProperty({ description: 'Price of the product' })
  price_product: string;

  @ApiProperty({ description: 'Quantity of the product in stock' })
  quantity: number;

  @ApiProperty({ description: 'Minimum alert level for stock' })
  min_alert_storages: number;

  @ApiProperty({ description: 'Barcode of the product' })
  codeBar_product: string;

  @ApiProperty({ description: 'Extra information about the product' })
  extra_product_information: string;

  @ApiProperty({ description: 'Internal information about the product' })
  internal_product_information: string;
}



export class InventoryDto {
    @ApiProperty({ description: 'ID of the inventory item' })
    id: number;
  
    @ApiProperty({ description: 'Title of the product' })
    title_product: string;
  
    @ApiProperty({ description: 'Description of the product' })
    description_product: string;
  
    @ApiProperty({ description: 'Image URL of the product' })
    image_product: string;
  
    @ApiProperty({ description: 'Price of the product' })
    price_product: string;
  
    @ApiProperty({ description: 'Quantity of the product in stock' })
    quantity: number;
  
    @ApiProperty({ description: 'Minimum alert level for stock' })
    min_alert_storages: number;
  
    @ApiProperty({ description: 'Barcode of the product' })
    codeBar_product: string;
  
    @ApiProperty({ description: 'Extra information about the product' })
    extra_product_information: string;
  
    @ApiProperty({ description: 'Internal information about the product' })
    internal_product_information: string;
  
    @ApiProperty({ type: [InventoryHistorySalesDto], description: 'History of sales for the product' })
    InventoryHistorySales: InventoryHistorySalesDto[];
  
    @ApiProperty({ type: [ShippingProductsDto], description: 'Shipping details for the product' })
    shippingProduct: ShippingProductsDto[];
  }