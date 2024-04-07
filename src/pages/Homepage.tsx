import React, { useEffect, useState } from "react"
import CitySelector from "@/components/citySelector";
import { useLoaderData } from "react-router-dom";
import CityCard from "@/components/cityCard";


interface Countries {
    country: string;
}

interface LoaderData {
    countries: Countries[];
}

interface City {
    country: string;
    city: string;
    lat: number;
    long: number;
}

export async function loader(): Promise<LoaderData> {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await res.json();
    const countries: Countries[] = data.data;
    console.log(countries);
    return { countries };
}


const Homepage: React.FC = () => {
    const { countries }: LoaderData = useLoaderData() as LoaderData;
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [addedCities, setAddedCities] = useState<City[]>([]);


    useEffect(() => {
        if (!selectedCountry) {
            return
        }
        async function getCities() {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    country: selectedCountry,
                })
            });
            const cities = await response.json();
            console.log(cities.data);
            setCities(cities.data);
        }
        getCities()
    }, [selectedCountry])




    async function handleCancel() {
        setSelectedCountry('');
        setSelectedCity('');
    }

    async function AddCity() {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/positions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: selectedCountry,
            })
        });
        const responseData = await response.json();
        console.log(responseData); // Log the entire response data
        const { data: { lat, long } } = responseData;
        const newEntry = {
            country: selectedCountry,
            city: selectedCity,
            lat,
            long
        }
        setAddedCities(prevCities => [...prevCities, newEntry]);
    }

    function handleAddCity() {
        AddCity()
        console.log('eklendi');
    }

    return (
        <>
            <div className="max-w-[85rem] mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="block text-2xl font-bold text-gray-800 sm:text-2xl md:text-5xl lg:text-3xl">
                            Sehir secerek hava durumunu ogrenebilirsiniz.
                        </h1>
                        <p className="mt-10 text-lg text-gray-800">
                            Sehrini sec ve hava durumunu ogren.
                        </p>
                        <CitySelector
                            countries={countries}
                            cities={cities}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                            setSelectedCity={setSelectedCity}
                            handleCancel={handleCancel}
                            setAddedCities={handleAddCity}
                        />
                    </div>
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img
                            className="w-full rounded-xl"
                            src="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&"
                            alt="Image Description"
                        />
                    </div>
                </div>
            </div >

            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {addedCities.map((city, index) => (
                        <CityCard
                            key={index}
                            city={city}
                        />
                    ))}


                </div>
            </div>

        </>
    )
}
export default Homepage


