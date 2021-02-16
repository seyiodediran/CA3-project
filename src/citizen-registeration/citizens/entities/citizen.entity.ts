import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Citizen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
}

