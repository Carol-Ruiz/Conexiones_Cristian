export class CreateCarDto {
 plate: string;  
 release_date: Date;
 is_available : true;
 price: number;
 comunidad_id: number;
}

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  in_stock: boolean;
  category_id: number;
}



