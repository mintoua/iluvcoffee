import { 
    Body, Controller, 
    Delete, 
    Get, HttpCode, HttpStatus, 
    Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';


@Controller('coffees')
export class CoffeesController {

    constructor( private readonly coffeeService: CoffeesService){

    }

    @Get("")
    public findAll(@Query() paginationQuery ){
        //const {limit,offset} = paginationQuery;
        return this.coffeeService.findAll();
    }
    @Get(":id")
    public findOne(@Param('id') id: string){
        return this.coffeeService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public createOne(@Body() createCoffeeDto: CreateCoffeeDto){
        //console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(":id")
    public updateOne(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id,updateCoffeeDto);
    }

    @Delete(":id")
    public removeOne(@Param('id') id: string){
        return this.coffeeService.remove(id);
    }

}
