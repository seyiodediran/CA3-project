import { CreateCitizenDto } from "../../citizens/dto/create-citizen.dto"

export class CreateBiodatumDto {
    readonly NIN: number;
    readonly BVN: number;
    readonly mobileNumber: number;
    readonly citizen: CreateCitizenDto;
}
