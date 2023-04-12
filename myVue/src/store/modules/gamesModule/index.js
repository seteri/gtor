
const gamesModule = {
    namespaced: true,



    state() {
        return {
            games: [
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },
                {name: "Cyberpunk 2077", img: "https://gtorr.net/uploads/posts/2023-04/1681237648_3ed31a66fd401cc33877756080765997.jpg", categories:["შუთერი", "ექშენი"], releaseDate: "2020", creator: "CD PROJEKT RED", language: "ინგლისური, რუსული და სხვა", description: "Cyberpunk 2077 - Open World,მოქმედებითი,პირველი პირის ხედვის მქონე სათავგადასავლო როლური თამაშია,სადაც მოქმედება ღამის ქალაქში მიმდინარეობს. ესაა მეგაპოლისი,რომელშიც ჭარბობს ძალაუფლება,გლამური და სხეულის მოდიფიკაცია." },
                {name: "Sherlock Holmes The Awakened", img: "https://gtorr.net/uploads/posts/2023-04/1681236387_hp2bwjx.png", categories:["შუთერი", "ექშენი", "ჰორორი"], releaseDate: "2023", creator: "MAMACHEMISTUDIOS", language: "ინგლისური, რუსული და სხვა", description: "Sherlock Holmes The Awakened - თამაშში მოქმედება 1882 წელს ხდება. გახდით შერლოკ ჰოლმსი და აღმოჩნდით Cthulhu-ს მითოსის ცენტრში. გამოიკვლიეთ იდუმალი გაუჩინარების სერია, რომელიც, როგორც ჩანს, დაკავშირებულია ბნელ კულტთან, რომელიც თაყვანს სცემს ძველ ღმერთს." },
                {name: "Tron: Identity", img: "https://gtorr.net/uploads/posts/2023-04/1681235729_wowuggu.png", categories:["შუთერი", "ექშენი"], releaseDate: "2023", creator: "Bithell Games", language: "ინგლისური", description: "Tron: Identity - ესაა სათავგადასავლო ვიზუალური ნოველა, სადაც დეტექტივ პროგრამას დაევალა საიდუმლოს ამოხსნა თუ რა იქნა მოპარული და ვის მიერ. თქვენზეა დამოკიდებული თუ ეჭვმიტანილს რა შეკითხვებს დაუსვამთ და თუ როგორ გამოიძიებთ საქმეს, რათა საბოლოოდ გარკვიოთ სიმართლე..." },

            ]

        }
    },

    getters: {

        games(state){
            return state.games
        }



    },

    mutations: {



    },


    actions: {


    },

}

export default gamesModule