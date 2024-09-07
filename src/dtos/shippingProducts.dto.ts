import { ApiProperty } from '@nestjs/swagger';

export class CreateShippingProductsDto {
  @ApiProperty({ description: 'Product ID' })
  product_id: number;

  @ApiProperty({ description: 'Guie number of the product', required: false })
  guie?: string;

  @ApiProperty({ description: 'Shipping company', required: false })
  shipping_company?: string;

  @ApiProperty({ description: 'Shipping date', required: false })
  date_shipping?: Date;

  @ApiProperty({ description: 'Shipping direction' })
  direction_shipping: string;

  @ApiProperty({
    description: 'Additional shipping information',
    required: false,
  })
  info_shipping?: string;

  @ApiProperty({ description: 'Status of the shipping', required: false })
  status_shipping?: string;
}

export class ShippingProductsDto {
  @ApiProperty({ description: 'ID of the shipping record' })
  id: number;

  @ApiProperty({ description: 'Product ID' })
  product_id: number;

  @ApiProperty({ description: 'Guie number of the product', required: false })
  guie?: string;

  @ApiProperty({ description: 'Shipping company', required: false })
  shipping_company?: string;

  @ApiProperty({ description: 'Shipping date', required: false })
  date_shipping?: Date;

  @ApiProperty({ description: 'Shipping direction' })
  direction_shipping: string;

  @ApiProperty({
    description: 'Additional shipping information',
    required: false,
  })
  info_shipping?: string;

  @ApiProperty({ description: 'Status of the shipping', required: false })
  status_shipping?: string;
}
