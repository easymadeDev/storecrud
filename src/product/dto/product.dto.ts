import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class productDTO{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(500)
    description: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    brand: string;


}