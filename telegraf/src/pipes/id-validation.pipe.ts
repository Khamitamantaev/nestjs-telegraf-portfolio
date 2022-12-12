import { ID_VALIDATION_ERROR } from './id-validation.constants';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Types } from "mongoose";

@Injectable()
export class IdValidationPipe implements PipeTransform {

    transform(value: string, metadata: ArgumentMetadata) {
        //если метаданные не из параметров запроса, тогда ничего не делаем
        if(metadata.type !== 'param') {
            return value
        }

        // Проверям на валидность id == value
        if(!Types.ObjectId.isValid(value)) {
            throw new BadRequestException(ID_VALIDATION_ERROR)
        }

        return value
    }
}