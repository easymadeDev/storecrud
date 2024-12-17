import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class ProductEntity extends BaseEntity{
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    brand: string;

}

