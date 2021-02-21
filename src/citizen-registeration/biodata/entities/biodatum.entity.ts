import { TypeOrmModule } from "@nestjs/typeorm"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Citizen } from "../../citizens/entities/citizen.entity"
import { PRIORITY_ABOVE_NORMAL } from "constants"

@Entity()
export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NIN: number;

    @Column()
    BVN: number;

    @Column()
    mobileNumber: number;

    @JoinColumn()
    @OneToOne(type => Citizen, citizen => citizen.biodatum, {cascade: true})
    citizen: Citizen
};

