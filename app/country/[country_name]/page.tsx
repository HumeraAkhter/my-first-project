    import "@/app/globals.css";
    import Link from "next/link";
    import Country from "@/app/components/Country";
    
    export default function CountryName({params}:{params:{country_name:string}}){
    const countries:{
           name:string;
           population:number;
           capital:string;
    }[]=[
        {
           name:"Pakistan",
           population:21645000000,
           capital:"Islamabad",
        },
        {
            name:"India",    
            population:5321789000,
            capital:"Dehli"
        },
        {
            name:"Japan",
            population:3452178000,
            capital:"Tokyo",
        },

    ];
    function findCountry(name:string): {name:string, population:number,capital:string,}| undefined{
     return countries.find(country =>  name.toLowerCase()  == country.name.toLowerCase());
         
     
    }
    const result = findCountry(params.country_name);
    
    
    
    return(
        <div>
            < Country   countryInfo  = {result} url = {params.country_name} />
            
            
        </div>
       )
    } 