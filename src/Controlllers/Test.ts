import {Controller, Get} from '@nestjs/common';


@Controller('test')
export class TestControllers{
    @Get()

    findAll(): string{
        return "Testcode";
    }
}