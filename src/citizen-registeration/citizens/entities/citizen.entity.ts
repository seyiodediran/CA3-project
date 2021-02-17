import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Citizen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    nationality: string;

    @Column()
    countryOfBirth: string;

    @Column()
    stateOfBirth: string;

    @Column({ nullable: true})
    townOfBirth: string;

    @Column()
    residenceAddress: string;

    @Column({ nullable: true})
    profession: string;
}

