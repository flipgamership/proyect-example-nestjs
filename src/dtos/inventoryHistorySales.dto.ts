import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryHistorySalesDto {
  @ApiProperty({ description: 'Product ID' })
  product_id: number;

  @ApiProperty({ description: 'Quantity of the sale' })
  quantity_sale: number;

  @ApiProperty({ description: 'Status of the product' })
  product_status: string;

  @ApiProperty({ description: 'Guie number of the product', required: false })
  product_guie?: string;

  @ApiProperty({
    description: 'Extra information about the product',
    required: false,
  })
  product_extra_information?: string;
}

export class InventoryHistorySalesDto {
  @ApiProperty({ description: 'ID of the sale' })
  id: number;

  @ApiProperty({ description: 'Product ID' })
  product_id: number;

  @ApiProperty({ description: 'Quantity of the sale' })
  quantity_sale: number;

  @ApiProperty({ description: 'Status of the product' })
  product_status: string;

  @ApiProperty({ description: 'Guie number of the product', required: false })
  product_guie?: string;

  @ApiProperty({
    description: 'Extra information about the product',
    required: false,
  })
  product_extra_information?: string;
}
