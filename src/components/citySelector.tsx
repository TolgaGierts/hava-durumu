
import { Sheet, SheetContent, SheetFooter, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";

interface CitySelectorProps {
    countries: { country: string }[];
    cities: string[];
    selectedCountry: string;
    setSelectedCountry: (country: string) => void;
    setSelectedCity: (city: string) => void;
    handleCancel: () => void;
    setAddedCities: (cities: string[]) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({
    countries,
    cities,
    selectedCountry,
    setSelectedCountry,
    setSelectedCity,
    handleCancel,
    setAddedCities
}) => {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center mt-4 px-2 py-2 bg-[#0f172a] text-white border border-gray-200 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Sehir Ekle
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Sehir Ekle</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <Select onValueChange={value => setSelectedCountry(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Ulke secin" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Ulkeler</SelectLabel>
                                {countries.map((country) => (
                                    <SelectItem key={country.country} value={country.country}>
                                        {country.country}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {selectedCountry && cities.length > 0 ? (
                    <div className="grid gap-4 py-4">
                        <Select onValueChange={value => setSelectedCity(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sehir secin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sehirler</SelectLabel>
                                    {cities.map((city) => (
                                        <SelectItem key={city} value={city}>
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                ) : (
                    <div className="grid gap-4 py-4">
                        <Select disabled>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sehir secin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sehirler</SelectLabel>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                )}
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={() => setAddedCities}>Ekle</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button variant={"outline"} onClick={handleCancel}>Vazgec</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CitySelector;
