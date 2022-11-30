// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reports } from './reports.entity';

@Injectable()
export class ReportsService {

    constructor(
        @Inject('PARKING_REPOSITORY')
        private reportsRepository: Repository<Reports>,
    ){}

    async findAll(): Promise<Reports[]> {
        return this.reportsRepository.find();
    }

    async findOne(id: number = 1): Promise<Reports> {
        //return {name: "Pera", id: id}
        return this.reportsRepository.findOneBy({ id: id });
    }

    async summary(reports: Reports){
        
        var result: any = {Mes: 'Maio'};
        var result2 = [];
        
        //const recordset = this.reportsRepository.find().then( items => items.map( (e) => { if(e.license_plate === 'string'){ return e; } }  )  );

        const recordset = await this.reportsRepository.find();
        //return recordset;
        if(recordset){
            
            result.dia  = 'Fevereiro';
            for (const contract of Object.keys(recordset)) {
                result.rola = 'Dezembro';
                //var it  +=  "d";
            }
            
             for (let key in recordset) {
                //result.areia = 'Agosto';
                let value = recordset[key].license_plate;
                if(value != 'string') result2.push(value);
            } 
            
            for(let i= 0; i < recordset.length; i++){
                result.caraio = 'Dezembro';
                //console.log(data.products[i].product_desc); //use i instead of 0
            }

          
            //result.push('Setembro');
            //Object.keys(recordset).map((d)=>{ result2.caraio = 'Dezembro';  } );
            

        }
        //result2.push('Junho');
        return result2;
    }

}

