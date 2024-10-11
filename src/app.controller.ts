import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
    constructor() {}

    @Get("/hi")
    getRootRoute(){
        return 'Hi Pradipta';
    }

    @Get("/bye")
    getByeThere(){
        return "Bye there!"
    }
}