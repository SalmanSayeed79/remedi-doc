const doctors=[
    {
      "id": "2be5f8632364ac9f9dcd3b6ade02918a",
      "name": "Inna Bukharovich",
      "email": "inna_bukharovich_11411@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "136-30 Maple Ave/ #1A",
      "zip": "11411"
    },
    {
      "id": "8aeac5866c3f3735c7e01a7563b195f8",
      "name": "Mun Hong",
      "email": "mun_hong_11375@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "\"42-31 Colden Street, #109\"",
      "zip": "11375"
    },
    {
      "id": "d3e46cd8984787be31afecbb1faf1554",
      "name": "Donald McCord",
      "email": "donald_mccord_11206@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "8684 15th Avenue",
      "zip": "11206"
    },
    {
      "id": "e7d2a853567875430f55018e00c37948",
      "name": "Ajay Shah",
      "email": "ajay_shah_10022@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "33 W. 125th St",
      "zip": "10022"
    },
    {
      "id": "d39e5bdc759350eab00372b945198611",
      "name": "Yeoman Chan",
      "email": "yeoman_chan_11203@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "30adb95891765b0b807c726b4e83bd4f",
      "name": "\"Marianne LaBarbera, MD\"",
      "email": "\"marianne_labarbera,_md_11220@gmail.com\"",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "706 Banner Ave.",
      "zip": "11220"
    },
    {
      "id": "faed9fe8a576cf90a77a6e9e2e8fdda1",
      "name": "Cherry Mar-Chan",
      "email": "cherry_mar-chan_10031@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "1150 Park Avenue",
      "zip": "10031"
    },
    {
      "id": "3347582cb6ab72a46c39ab6cc520f4b6",
      "name": "Nicole Arcentales",
      "email": "nicole_arcentales_10454@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "4000 SETON AVENUE",
      "zip": "10454"
    },
    {
      "id": "4852c65a8a299d16ee168bcb52bc9ac4",
      "name": "Aldo Arpaia",
      "email": "aldo_arpaia_11203@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "67041f063add7f41b4f017485006d114",
      "name": "Jean Pierre Barakat",
      "email": "jean_pierre_barakat_11355@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "22-31 33 Street",
      "zip": "11355"
    },
    {
      "id": "3291c386b334af38c92cba1bf9268a9a",
      "name": "Jennifer Becker",
      "email": "jennifer_becker_11412@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "219-02 LINDEN BLVD",
      "zip": "11412"
    },
    {
      "id": "f489412ab4e7cd876b122e2e230c619f",
      "name": "Alexander Beylinson",
      "email": "alexander_beylinson_10021@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "8cd37936aea7522f5eebb11fdfa15297",
      "name": "Alexander Beylinson",
      "email": "alexander_beylinson_11205@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "25f120a0dd474fbd19280ba7d6dcf165",
      "name": "Alex Bruckstein",
      "email": "alex_bruckstein_11373@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "90-10 Elmhurst Avenue",
      "zip": "11373"
    },
    {
      "id": "3957d52917937f9e56a8d32e8feee981",
      "name": "Michael Bruno",
      "email": "michael_bruno_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "a7bab75cee9b8c898482aace03525ba3",
      "name": "Vincent Calamia",
      "email": "vincent_calamia_10033@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "35 East 35th Street",
      "zip": "10033"
    },
    {
      "id": "add2943c0bc339b402dc91626dead2e5",
      "name": "Jaxier Chacon",
      "email": "jaxier_chacon_10065@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "435 fort Washington Avenue",
      "zip": "10065"
    },
    {
      "id": "7e96738c59e6c15a5cfc7146a38be155",
      "name": "Sydney Chen",
      "email": "sydney_chen_11238@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "\"142 Joralemon Street, Suite 11B\"",
      "zip": "11238"
    },
    {
      "id": "a7853e7f3b9ae97faaad4a5166b202cd",
      "name": "Anna DiBona",
      "email": "anna_dibona_11692@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "\"133-29 41st Rd, 2D\"",
      "zip": "11692"
    },
    {
      "id": "dbdfc996261d7e7ed15ddc2766842fe5",
      "name": "Austin Epstein",
      "email": "austin_epstein_11372@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "70-17 37 Avenue",
      "zip": "11372"
    },
    {
      "id": "facdf58ee0e6356b36984b11fbdb9a60",
      "name": "Paul C. Gazzara",
      "email": "paul_c._gazzara_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "121 East 60th Street",
      "zip": "10013"
    },
    {
      "id": "d105d192ca4b9d45e24cd967937067d8",
      "name": "Claudia Geris",
      "email": "claudia_geris_11224@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "5fecf8ae87df037e102bd037916cd1d6",
      "name": "Billy Geris",
      "email": "billy_geris_10022@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "600 W 150th Ste. 4",
      "zip": "10022"
    },
    {
      "id": "1701d9e8dadb55c9bc570c01caa15328",
      "name": "Rita Grigiene",
      "email": "rita_grigiene_10128@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "245 West 19th Street #CF",
      "zip": "10128"
    },
    {
      "id": "83665e4ee2ea1959cedc70449d6e451e",
      "name": "Ramy Hanna",
      "email": "ramy_hanna_10013@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "435 Fort Washington Avenue Suite 1C",
      "zip": "10013"
    },
    {
      "id": "14b57c4b53f4c3af2b666df645161824",
      "name": "Giovannie Jean-Baptiste",
      "email": "giovannie_jean-baptiste_10456@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "\"1001 Grand Concourse, #13\"",
      "zip": "10456"
    },
    {
      "id": "92bbe102c2bc57212a79cde2604094ec",
      "name": "Keith Kouroupos",
      "email": "keith_kouroupos_11373@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "40-04 Bowne St",
      "zip": "11373"
    },
    {
      "id": "f3ce64cd89054cc1c9a946c9b9bbce47",
      "name": "Miroslawa Kudej",
      "email": "miroslawa_kudej_11355@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "37-11 88th Street",
      "zip": "11355"
    },
    {
      "id": "02bd56a287b04975ad76e932a59465ee",
      "name": "Robert La Penna",
      "email": "robert_la_penna_11219@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "416 37 St",
      "zip": "11219"
    },
    {
      "id": "9f4605f79babba9a82c0d23f827468a7",
      "name": "James Laffertey",
      "email": "james_laffertey_11355@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "bc529e2df06d4e2ab0397a3887790ded",
      "name": "John Maese",
      "email": "john_maese_10021@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "3108ca24a0ed7a7fce101bc77653d59c",
      "name": "Larisa Malisova",
      "email": "larisa_malisova_11372@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "211-16 Union Turnpike",
      "zip": "11372"
    },
    {
      "id": "0a69790d8105529e408bf2dc9728261a",
      "name": "Lenard Marchetta",
      "email": "lenard_marchetta_11402@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "88-01 Parson Blvd",
      "zip": "11402"
    },
    {
      "id": "10e5b673f8b7d8ebc802cae2a4f85253",
      "name": "Joseph Marchisella",
      "email": "joseph_marchisella_11422@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "64-12 Fresh Pond Rd",
      "zip": "11422"
    },
    {
      "id": "aaf4d77197ae33666027d16288ffb322",
      "name": "John McCarthy",
      "email": "john_mccarthy_10306@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "55 Midland Avenue",
      "zip": "10306"
    },
    {
      "id": "c6a727223dc3914c34a32f971f52096c",
      "name": "Viola Ortiz",
      "email": "viola_ortiz_10312@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "ee73659bf24643c40d71cc82f13d7d77",
      "name": "Paolo Perrone",
      "email": "paolo_perrone_11516@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "110-45 Queens Boulevard Suite A",
      "zip": "11516"
    },
    {
      "id": "0c0a5f32ab6602c9e75b693d9cb1501a",
      "name": "John Petrungaro",
      "email": "john_petrungaro_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "d456a8daa10712be4d35b7e653c29eb6",
      "name": "David Pfaff",
      "email": "david_pfaff_11422@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "64-12 Fresh Pond Rd",
      "zip": "11422"
    },
    {
      "id": "85b90a6adc369cffba76222d0f4b5a5e",
      "name": "Alex Racco",
      "email": "alex_racco_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "7fb5c9e2636d51a47e69422afc900dd4",
      "name": "Nair Ramachandran",
      "email": "nair_ramachandran_11230@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "437 Mother Gaston Blvd",
      "zip": "11230"
    },
    {
      "id": "9030faeb66d759e9ebc5f82abea5db0d",
      "name": "Veronika Romashova",
      "email": "veronika_romashova_11230@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "178 EAST 85TH STREET 4TH FLOOR",
      "zip": "11230"
    },
    {
      "id": "93b0d0ce60eb455900b15c315275d3d8",
      "name": "M. Fawzy Saleem",
      "email": "m._fawzy_saleem_11220@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "60 East Plaza Street",
      "zip": "11220"
    },
    {
      "id": "1ea349922b77a39e14325a6d49b15e95",
      "name": "Bart Savino",
      "email": "bart_savino_11373@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "5d19b4a7cb06d8f4078d18362f76a8ac",
      "name": "Anna Marie Scopellito-Olsen",
      "email": "anna_marie_scopellito-olsen_11379@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "926b0ed27978a55c6fd8c4d75b0ea4bd",
      "name": "Donna Seminara",
      "email": "donna_seminara_11372@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "8738a008789ed0acd6c5cfdb04df4a25",
      "name": "Miguel Tirado",
      "email": "miguel_tirado_11220@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "247 Grand St",
      "zip": "11220"
    },
    {
      "id": "f522b25e966cd00a5a2e8b1c88a49a71",
      "name": "Renata Ukowska",
      "email": "renata_ukowska_10032@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "217 Grand Street",
      "zip": "10032"
    },
    {
      "id": "d6e91667128153ea9e3d92983c41f9ff",
      "name": "Salvatore Volpe",
      "email": "salvatore_volpe_11379@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "c11cc6141f1bbdff712f24f2dde5f92f",
      "name": "Jamshad Wyne",
      "email": "jamshad_wyne_10011@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "\"251 E 33rd Street, 3rd floor\"",
      "zip": "10011"
    },
    {
      "id": "3f60810eede7415bd1afc70265755de9",
      "name": "David Fastman",
      "email": "david_fastman_10468@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "320 East 188th Street",
      "zip": "10468"
    },
    {
      "id": "3902d5337d60ea60aacb77332aff77c6",
      "name": "Michael Moretti",
      "email": "michael_moretti_11694@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "391 East 149th Street",
      "zip": "11694"
    },
    {
      "id": "8bc754b44ca7544025f3f9a595faad99",
      "name": "Igor Ryndin",
      "email": "igor_ryndin_11217@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "914b04c957eeceb8fc16e9379cdb43d5",
      "name": "Svetlana Ten",
      "email": "svetlana_ten_11218@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "596 Pennsylvania Avenue",
      "zip": "11218"
    },
    {
      "id": "3999dae772b4d639ab382d8ce8a63304",
      "name": "Vijaya Lakshmi Chandrakant",
      "email": "vijaya_lakshmi_chandrakant_10467@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "\"4742 White Plains Rd, Ste1\"",
      "zip": "10467"
    },
    {
      "id": "318a9509676a8f0b1784ef2343ac5e9c",
      "name": "Nataly Larson",
      "email": "nataly_larson_10044@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "c0226f53aa81d3cc851d2a627e782cc1",
      "name": "Nancy Wallach",
      "email": "nancy_wallach_11373@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "112-03 Queens Blvd.",
      "zip": "11373"
    },
    {
      "id": "9680e741ce4c650e7531a1ec62cefc4a",
      "name": "Ahmad Kamal Aslam",
      "email": "ahmad_kamal_aslam_10453@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "2494 Williamsbridge Rd.",
      "zip": "10453"
    },
    {
      "id": "ed81a990130ea88a97faded35a29709f",
      "name": "Ghanshyam Bhambhani",
      "email": "ghanshyam_bhambhani_10021@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "a65b849d548f5703bb915942e0d3a57a",
      "name": "Sarat Bhumi MD",
      "email": "sarat_bhumi_md_11354@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "9317 Roosevelt Ave",
      "zip": "11354"
    },
    {
      "id": "37ee7bbbb130ba7aca472508ac960ecc",
      "name": "Aaron Freilich",
      "email": "aaron_freilich_11203@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "dfdf3efc4070fa7bd7177117e313e94b",
      "name": "Richard Friedlander",
      "email": "richard_friedlander_11203@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "7ef8a0bbbe9ed1f0a6d51c2378a9bb5c",
      "name": "Sohah Iqbal",
      "email": "sohah_iqbal_11203@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "d11735b04c62720bcb8f6ad155380fb5",
      "name": "Manuel Lopez",
      "email": "manuel_lopez_10472@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "1211 White Plains Rd",
      "zip": "10472"
    },
    {
      "id": "00ad8be3357ad20376e993026b0c94b0",
      "name": "Myo Maw",
      "email": "myo_maw_11217@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "2083 East 65 Street",
      "zip": "11217"
    },
    {
      "id": "e50f4903fe6bc65c427d1f03c0504521",
      "name": "Sameet Palkhiwala",
      "email": "sameet_palkhiwala_11205@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "863 50th street suite M5",
      "zip": "11205"
    },
    {
      "id": "93d62806ed6f48bf8f8fb548261a1b4d",
      "name": "Arun Palkhiwala",
      "email": "arun_palkhiwala_11203@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "9b99d873d5dfe5699151de7148de75fe",
      "name": "Gopi Punukollu",
      "email": "gopi_punukollu_11238@gmail.com",
      "specilization": "urologist",
      "borough": "Brooklyn",
      "address": "1446 Broadway Avenue",
      "zip": "11238"
    },
    {
      "id": "0c60b2be3fb58722ba563f5722fe1feb",
      "name": "Furqan Tejani",
      "email": "furqan_tejani_10065@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "435 fort Washington Avenue",
      "zip": "10065"
    },
    {
      "id": "34166613b9be1b8f28d83a175585ba84",
      "name": "Lainie Hurst",
      "email": "lainie_hurst_10467@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "6f35d31cc730c98251e4201b318819eb",
      "name": "Stella Ilyayeva",
      "email": "stella_ilyayeva_10306@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "55 Midland Avenue",
      "zip": "10306"
    },
    {
      "id": "14f3a1a7d1f5e6d34c8ed4af7573150b",
      "name": "Tooraj Zahedi",
      "email": "tooraj_zahedi_10034@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "46 Fort Washington Avenue #2",
      "zip": "10034"
    },
    {
      "id": "fbc4de2c643b6374ce6883eb5663a290",
      "name": "Joel Baum",
      "email": "joel_baum_11373@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "42-60 Main Street Suite 1C",
      "zip": "11373"
    },
    {
      "id": "e72d28ae49aee882e7adc5f9e0875a50",
      "name": "Rounak Ahmed",
      "email": "rounak_ahmed_11103@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "93-20 A Roosevelt Avenue",
      "zip": "11103"
    },
    {
      "id": "7963726559cb70a30a3ab32f37b0d4fd",
      "name": "Khurram Awan",
      "email": "khurram_awan_11692@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "13710 FRANKLIN AVE",
      "zip": "11692"
    },
    {
      "id": "1ae2a1940c3bb3265e9cbedb0be11c40",
      "name": "Mohammad Bhatti",
      "email": "mohammad_bhatti_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "1216 Beach Ave #1",
      "zip": "10453"
    },
    {
      "id": "057ad26f614fdd244f6bd90ada36298b",
      "name": "Mohammad Bhatti",
      "email": "mohammad_bhatti_10467@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "8028dc8600b5d283323e96740b3f2114",
      "name": "Meera Boppana",
      "email": "meera_boppana_11216@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "7318 13th Avenue",
      "zip": "11216"
    },
    {
      "id": "43cdc9f4ce905d9d86d0762c87e6b428",
      "name": "Yeahseon Bruinings",
      "email": "yeahseon_bruinings_11372@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "daacf85ca4366fefb22aaa85d38889e9",
      "name": "Kevin Charlotten",
      "email": "kevin_charlotten_10011@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "210 E 86th St",
      "zip": "10011"
    },
    {
      "id": "e0cbb2a163675c561752cb46c5bfb48c",
      "name": "Joseph Delimon",
      "email": "joseph_delimon_11211@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "6356bec587c12dcecbfee4b8c27386ed",
      "name": "Mergie Desir",
      "email": "mergie_desir_11368@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Staten Island",
      "address": "9425 59th Avenue Suite f7",
      "zip": "11368"
    },
    {
      "id": "fd33af7386e3a4ffef8237699c6e04b8",
      "name": "Allan Detweiler",
      "email": "allan_detweiler_11372@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "87-59 171st Street",
      "zip": "11372"
    },
    {
      "id": "7bcc5cd47922bd4d2f25dedd91796f99",
      "name": "Rudrama Duggirala",
      "email": "rudrama_duggirala_10034@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "707 West 171st Suite A",
      "zip": "10034"
    },
    {
      "id": "636a4959d80c2c437beb8f5dd57a69d8",
      "name": "Marjorie Dugue",
      "email": "marjorie_dugue_11377@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "196-15 Hillside Ave",
      "zip": "11377"
    },
    {
      "id": "547bf130b155abf32043532fc0ad0e47",
      "name": "Gloria Dunnder Leacock",
      "email": "gloria_dunnder_leacock_11206@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "136-30 MAPLE AVENUE #2F",
      "zip": "11206"
    },
    {
      "id": "83347ddcf25424532cd4c6c1ca83cd89",
      "name": "Tahira Farooqi Ghaffar",
      "email": "tahira_farooqi_ghaffar_11104@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "8020 Broadway Suite 1F",
      "zip": "11104"
    },
    {
      "id": "8801427c278c358c0949c813e64c1400",
      "name": "Emmanuel Fashakin",
      "email": "emmanuel_fashakin_11373@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "aa0948f9a2794ee50cf59d4f5f0e3cad",
      "name": "James Flesher",
      "email": "james_flesher_10467@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "7b3eb7658af24a620cfecc5521c21f31",
      "name": "Tahira Ghaffar",
      "email": "tahira_ghaffar_11210@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "443 Linden Blvd",
      "zip": "11210"
    },
    {
      "id": "afeb76b8d16799d7000670335691dbbc",
      "name": "Mery Gomez",
      "email": "mery_gomez_11427@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "39-07 Prince St. Suite 3J",
      "zip": "11427"
    },
    {
      "id": "867d693eba9b79710507b55083d9b048",
      "name": "Asbar Haaris",
      "email": "asbar_haaris_11355@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "201 East 69th St",
      "zip": "11355"
    },
    {
      "id": "28f279d87bbabe61fa5715c9f15d4bca",
      "name": "Jung-ah Han",
      "email": "jung-ah_han_10016@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "594 Broadway Suite 310",
      "zip": "10016"
    },
    {
      "id": "6918e48a9b676a2d6d9e95c45bb9b058",
      "name": "Tarek Hegazi",
      "email": "tarek_hegazi_10022@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "435 Fort Washington Avenue #1H",
      "zip": "10022"
    },
    {
      "id": "d94fe76f0e39896eff12a39af9b69912",
      "name": "Jia Hong",
      "email": "jia_hong_11042@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "4039 Junction Blvd",
      "zip": "11042"
    },
    {
      "id": "e326ae49478bdc0ff9ce55cf6c4e025d",
      "name": "Syed Najeeb Hussaini",
      "email": "syed_najeeb_hussaini_11356@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "1468 Richmond Avenue Ste B",
      "zip": "11356"
    },
    {
      "id": "045f09412418475a3782eb0335d64911",
      "name": "Lina Hwang",
      "email": "lina_hwang_10023@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "120 E. 36th Street",
      "zip": "10023"
    },
    {
      "id": "ecaaf5d804fde1307548d84524d3882f",
      "name": "Ernst Jean",
      "email": "ernst_jean_10016@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "140 Wadsworth Avenue",
      "zip": "10016"
    },
    {
      "id": "226c2191611580f13552d08d369d3a56",
      "name": "Karin Kalkstein",
      "email": "karin_kalkstein_10011@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "328 East 61st Street",
      "zip": "10011"
    },
    {
      "id": "b7f5bee682a1e9ff50826da7592d5d3d",
      "name": "Byung Kang",
      "email": "byung_kang_11377@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "196-15 Hillside Ave",
      "zip": "11377"
    },
    {
      "id": "e7e7ce5508c6660adcd6b4d25a15f41b",
      "name": "Andrew Kim",
      "email": "andrew_kim_11215@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "\"2310 65th Street, 2nd floor\"",
      "zip": "11215"
    },
    {
      "id": "f353f52676fd2d23ce1925b1ac373a99",
      "name": "Bernard Levine",
      "email": "bernard_levine_11205@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "189 Montague St. Ste 700",
      "zip": "11205"
    },
    {
      "id": "8a65359094e87180057a25a574d20e2b",
      "name": "Joseph Louis",
      "email": "joseph_louis_11373@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "90-10 Elmhurst Avenue",
      "zip": "11373"
    },
    {
      "id": "54f49fd57ad35fcfc60112212d7ee106",
      "name": "Durga Maddineni",
      "email": "durga_maddineni_11355@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "d3939f3e82f4b6b0a1f0bff6c9069f11",
      "name": "Alfredo Maduro",
      "email": "alfredo_maduro_11354@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "5620cc67dfd13f056b831ebe559d0630",
      "name": "Alma Mesquita",
      "email": "alma_mesquita_11236@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "fa96f05683219520088b3c2be2f996a6",
      "name": "STELLA MILOS",
      "email": "stella_milos_10312@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "4335 Hylan Blvd",
      "zip": "10312"
    },
    {
      "id": "38cf432fcd42d775fc2aaecb92986a48",
      "name": "Donna Murphy",
      "email": "donna_murphy_10453@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "540a0775a3817416d1dfd2edf398da6b",
      "name": "Yi Ngai",
      "email": "yi_ngai_10030@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "f358f4632130b1e06e949f8b40599805",
      "name": "Alvaro Olayo",
      "email": "alvaro_olayo_11220@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "437e1cc31c9238e7aa601ef163bd7fee",
      "name": "\"Mohammed Osmani, MD\"",
      "email": "\"mohammed_osmani,_md_11373@gmail.com\"",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "05953d8d4ef82944f6e9721bc1db6c1c",
      "name": "Punyadechi Photangtham",
      "email": "punyadechi_photangtham_11224@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "520 Neptune avenue",
      "zip": "11224"
    },
    {
      "id": "ff7e67761a4c5ed6d5a5908df8799c40",
      "name": "Joseph Pierre",
      "email": "joseph_pierre_10016@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "64 Nagle Avenue",
      "zip": "10016"
    },
    {
      "id": "89e5ce554eabc121beee5b303ca59931",
      "name": "Ambrose Pipia",
      "email": "ambrose_pipia_10467@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "6b18e1a849b969bdbc206fe7e842de5c",
      "name": "Hifza Qureshi",
      "email": "hifza_qureshi_10032@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "3f851c361e50cc5003c020c17cffad4a",
      "name": "Farooq Umar Qureshi",
      "email": "farooq_umar_qureshi_11203@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "1236 Fulton Street",
      "zip": "11203"
    },
    {
      "id": "f9ded071ef3a83c9f206526572feca60",
      "name": "Rumana A. Rahman",
      "email": "rumana_a._rahman_10021@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "a71ab94eb40f9e661330f29f18d23c17",
      "name": "Diego Ratzlaff",
      "email": "diego_ratzlaff_11377@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "205-16 Linden blvd",
      "zip": "11377"
    },
    {
      "id": "efd4d49d066fb5588bc794bbc24ba691",
      "name": "Zamar Raza",
      "email": "zamar_raza_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "13f349bf3744f10c2c2b121450ae390b",
      "name": "Michele Reed",
      "email": "michele_reed_11211@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "ae3d68b9f7131ce085ab3388a289127c",
      "name": "Michele Reed",
      "email": "michele_reed_11209@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "1d9f6ece68c2189094f140587f85386e",
      "name": "Darnley Renaud",
      "email": "darnley_renaud_11372@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "98014bf139b0c7a3e14831c514a3bcbe",
      "name": "Shazia Sami",
      "email": "shazia_sami_11372@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "38-34 Parsons Blvd #1-D",
      "zip": "11372"
    },
    {
      "id": "e9e70f8f14410cc353dde32b82d4413c",
      "name": "Michael Sands",
      "email": "michael_sands_10304@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "-305 Seguine Avenue",
      "zip": "10304"
    },
    {
      "id": "c6b5b85b3c93ef0df163066d9e49d64e",
      "name": "Saulius Skeivys",
      "email": "saulius_skeivys_10467@gmail.com",
      "specilization": "psychologist",
      "borough": "Manhattan",
      "address": "170 W.233Rd Street",
      "zip": "10467"
    },
    {
      "id": "6109f56026182501439058856806ca1c",
      "name": "Jesse Stoff",
      "email": "jesse_stoff_10462@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "a5b9fafc26c1c190283f7919e526bc3d",
      "name": "Sophia Streete-Smalls",
      "email": "sophia_streete-smalls_11215@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "1700 Flatbush Ave",
      "zip": "11215"
    },
    {
      "id": "c3db4f8aa69143e1bf6da6bbb2da1d11",
      "name": "SURENDRA SUGRIM",
      "email": "surendra_sugrim_10472@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "1211 White Plains Rd",
      "zip": "10472"
    },
    {
      "id": "eb6d57983c7ccc8859fc21c485887e39",
      "name": "Ida Tetro",
      "email": "ida_tetro_11402@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "88-01 Parson Blvd",
      "zip": "11402"
    },
    {
      "id": "84f82bb4a8e253cf38b9b5ba2286ae60",
      "name": "Michael Tugetman",
      "email": "michael_tugetman_10453@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "b496ef2be245958babbf287c8323040e",
      "name": "Rojasudha Vatti",
      "email": "rojasudha_vatti_11355@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Staten Island",
      "address": "29-28 41st Avenue",
      "zip": "11355"
    },
    {
      "id": "f77c002a4306b45523e1d0b1b45337b0",
      "name": "Suzanne Walker",
      "email": "suzanne_walker_10001@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "2201 Amsterdam Avenue",
      "zip": "10001"
    },
    {
      "id": "758591ccd804e20cc1bcb777941fa697",
      "name": "Fei Wang",
      "email": "fei_wang_11203@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "23dca6c32a37b4fd4b194f3ff6a86b7c",
      "name": "John Wat",
      "email": "john_wat_11216@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "7318 13th Avenue",
      "zip": "11216"
    },
    {
      "id": "6506d224dbe4fa49839d13702c895b11",
      "name": "Amy Xioa Chen Ma",
      "email": "amy_xioa_chen_ma_11354@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "79e33fe45426c52f1d285652c2cc8b20",
      "name": "Pin Mei Yao",
      "email": "pin_mei_yao_11355@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "87-46 168th Street",
      "zip": "11355"
    },
    {
      "id": "7d224c3c532d417524ffc4e61e84a2a5",
      "name": "Kyi Win Yu",
      "email": "kyi_win_yu_11211@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "df66c34af6e9da1a99d3edd836edd275",
      "name": "Xiaoxia Zhang",
      "email": "xiaoxia_zhang_11374@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "142-10B Roosevelt Ave",
      "zip": "11374"
    },
    {
      "id": "415ae06502fc512119ac1b58099a08eb",
      "name": "Dalai Zhou",
      "email": "dalai_zhou_11220@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "247 Grand St",
      "zip": "11220"
    },
    {
      "id": "5a074069ea0b1ac3de919e6b2d454d04",
      "name": "Joseph Frager",
      "email": "joseph_frager_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "bd955fee89486376ff9e9009ba47524b",
      "name": "Barbara Berger",
      "email": "barbara_berger_10044@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "d3a1c97072fc9f3b40e3c9c2415da0ff",
      "name": "Qaiser Abbas",
      "email": "qaiser_abbas_10024@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "4250 Broadway Suite 1A",
      "zip": "10024"
    },
    {
      "id": "4b32830638a8d9d7b8e133c71bb3e30f",
      "name": "Violet Abemayor",
      "email": "violet_abemayor_10011@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "\"251 E 33rd Street, 3rd floor\"",
      "zip": "10011"
    },
    {
      "id": "dca2b276591bbe358653e1edd5a53c5e",
      "name": "Erie Agustin",
      "email": "erie_agustin_10019@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "40 Montgomery Street",
      "zip": "10019"
    },
    {
      "id": "994f4d1634c03572779fd4dc372ca4c0",
      "name": "Sultan Ahmed",
      "email": "sultan_ahmed_11435@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "\"39-07 Prince Street, Suite 3A\"",
      "zip": "11435"
    },
    {
      "id": "12e16dc4d7db4f0eb6bdcfc84a80e1de",
      "name": "Shamim Ahmed",
      "email": "shamim_ahmed_11229@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "1166 Eastern Parkway",
      "zip": "11229"
    },
    {
      "id": "2d2370b91f0ece1fc50583e15e0515ad",
      "name": "Nazia Ajani",
      "email": "nazia_ajani_11373@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "\"41-50 78th St., Ground Fl.\"",
      "zip": "11373"
    },
    {
      "id": "04bd506f0de282f12099a32722cbdc53",
      "name": "MOHAMMAD AKHTAR",
      "email": "mohammad_akhtar_10453@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "2494 Williamsbridge Rd.",
      "zip": "10453"
    },
    {
      "id": "67c830597e99f5ea7873847e24eccfd8",
      "name": "Tasbirul Alam",
      "email": "tasbirul_alam_10021@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "d4add71b392e7dbe98364b860649e5c3",
      "name": "Mamoun Alhajjouman",
      "email": "mamoun_alhajjouman_11220@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "32b01f98cda7d50535e4b7c40a15a5f8",
      "name": "Lucia Alva",
      "email": "lucia_alva_10044@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "a04df21e6f9936c952ead98e29ca3358",
      "name": "William Ankobiah",
      "email": "william_ankobiah_11206@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "136-30 MAPLE AVENUE #2F",
      "zip": "11206"
    },
    {
      "id": "4b287f25152a1432d3f4f0cb05761b60",
      "name": "Obiora Anyoku",
      "email": "obiora_anyoku_10044@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "76d01324668a1135a3bc83784162c521",
      "name": "Luz Ares",
      "email": "luz_ares_11230@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "100 Ross Street",
      "zip": "11230"
    },
    {
      "id": "231146b440a549d50e9904ba2468e9e9",
      "name": "Khaleeq Arshed",
      "email": "khaleeq_arshed_11230@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "258 Henry Street",
      "zip": "11230"
    },
    {
      "id": "024e4e36bdbe352d5df7ade81874a45a",
      "name": "Khin Aung",
      "email": "khin_aung_11377@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "\"136-20 38th Avenue, Suite 6C\"",
      "zip": "11377"
    },
    {
      "id": "f347960e213cdb53d06cb956c5b7445c",
      "name": "SABINA AWWAL",
      "email": "sabina_awwal_11208@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "2091 Nostrand Ave",
      "zip": "11208"
    },
    {
      "id": "a9ef52116274069e1ec4182a76dc8da9",
      "name": "Farzana Aziz",
      "email": "farzana_aziz_10468@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "\"1807 Randall Avenue,\"",
      "zip": "10468"
    },
    {
      "id": "7734fbf9d30595cebbdb23a97b33d3f6",
      "name": "Farzana Aziz",
      "email": "farzana_aziz_10462@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "3010 Grand Concourse",
      "zip": "10462"
    },
    {
      "id": "cd743d4e5008682e395122eb17b32ff1",
      "name": "Daysi Baez",
      "email": "daysi_baez_11368@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "9b3244d79d7fe9cffffc6c32b083b25a",
      "name": "Daysi Baez",
      "email": "daysi_baez_11435@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "87 08 Justice Avenue",
      "zip": "11435"
    },
    {
      "id": "7bc80103a1579b3b277dbdd4b332a95a",
      "name": "Mayer Ballas",
      "email": "mayer_ballas_11423@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "\"36-09 Main Street, Suite 8C\"",
      "zip": "11423"
    },
    {
      "id": "4ecd253909378519e43141656a851959",
      "name": "Lionel Barrau",
      "email": "lionel_barrau_10452@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "1560 GRAND CONCOURSE",
      "zip": "10452"
    },
    {
      "id": "3f89751aeb5061d7c341dd0082959405",
      "name": "Francisco Bautista",
      "email": "francisco_bautista_11422@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "5716 Myrtle Avenue",
      "zip": "11422"
    },
    {
      "id": "96253e3be84a09f78ec3c0ce3f68370d",
      "name": "Hector Becil",
      "email": "hector_becil_10022@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "33 W. 125th St",
      "zip": "10022"
    },
    {
      "id": "dfd45ecbd9e53dd281fe8fedeba9bff2",
      "name": "Shamim A. Begum",
      "email": "shamim_a._begum_11373@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "37-44 75th Street",
      "zip": "11373"
    },
    {
      "id": "56f678e84a082ea6b80b19390812f5da",
      "name": "Eric Behrens",
      "email": "eric_behrens_11104@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "\"87-08 Justice Ave, Ste CS\"",
      "zip": "11104"
    },
    {
      "id": "c63462d135719a731ddb4411f5d8ceb3",
      "name": "Marie Belotte",
      "email": "marie_belotte_11372@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "142-03 60th Ave",
      "zip": "11372"
    },
    {
      "id": "175882616d4b3ada9654435bec48cc26",
      "name": "Marco A. Benitez",
      "email": "marco_a._benitez_10028@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "\"380 2nd Avenue, Suite 1002\"",
      "zip": "10028"
    },
    {
      "id": "614ee19aff5a32f24c9cea6a4eb99b0b",
      "name": "Subrahmanya Bhat",
      "email": "subrahmanya_bhat_11377@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "87-04 Rockaway Beach Blvd",
      "zip": "11377"
    },
    {
      "id": "7a1029912d9f7e5c1e54c8279da8a33c",
      "name": "MUHAMMAD BILLAH",
      "email": "muhammad_billah_11355@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "c9dad9833cbb3e0bc539d305a5ac3a1e",
      "name": "Luis Blanco",
      "email": "luis_blanco_10453@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "607 Soundview Ave",
      "zip": "10453"
    },
    {
      "id": "a88d2a43350a11d65e7a796355e297c2",
      "name": "Daniel Boccardo",
      "email": "daniel_boccardo_10033@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "\"3410-3418 Broadway, 2nd floor\"",
      "zip": "10033"
    },
    {
      "id": "b92cb691c0434808b553d37a39282710",
      "name": "Jessica Borrero",
      "email": "jessica_borrero_11355@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "\"176-60 Union Turnpike, Suite 145\"",
      "zip": "11355"
    },
    {
      "id": "35a155f909859f7b667d94801c136de3",
      "name": "Ida Bronfman",
      "email": "ida_bronfman_10021@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "895 PARK AVENUE",
      "zip": "10021"
    },
    {
      "id": "e365a1107e84ea78ab6ff4476d15407f",
      "name": "Daniel Buff",
      "email": "daniel_buff_11235@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "471 Hart Street",
      "zip": "11235"
    },
    {
      "id": "cb8d752e57e1d1bb32f9bc008da8a206",
      "name": "Kent B. Cao",
      "email": "kent_b._cao_11211@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "3031 Bedford Avenue",
      "zip": "11211"
    },
    {
      "id": "e176d3fd38381744e269a4dba8849b09",
      "name": "Katie Carmen",
      "email": "katie_carmen_10312@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "08e5c8c9665b2983fe61872a3d7c82aa",
      "name": "CANDIDA CATUCCI",
      "email": "candida_catucci_11211@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "816bd942a8a948450e377ce335d7e18a",
      "name": "Tak Chan",
      "email": "tak_chan_11220@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "706 Banner Ave.",
      "zip": "11220"
    },
    {
      "id": "f156a180dc7e76fb4fa3e41c0ed1891c",
      "name": "Steve C Chang",
      "email": "steve_c_chang_11418@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "711 Cedar Lawn",
      "zip": "11418"
    },
    {
      "id": "b0845a1397cb3a1857beadfb6627be28",
      "name": "Mariamma G. Chelagiri",
      "email": "mariamma_g._chelagiri_10453@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "2d5c6969abda7e9ff41b101c3363bd87",
      "name": "Yuping Chen",
      "email": "yuping_chen_11220@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "745 Nostrand Avenue",
      "zip": "11220"
    },
    {
      "id": "5988600ac2f2cb1a72495437457e5239",
      "name": "Yuchun Chen",
      "email": "yuchun_chen_10031@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "4bce74b026fdf484da1eb7759b0232a8",
      "name": "Song Ja Choi",
      "email": "song_ja_choi_11516@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "110-45 Queens Boulevard Suite A",
      "zip": "11516"
    },
    {
      "id": "db3776b3de8df4d6e249708d1c1be3cd",
      "name": "Alexander Choi",
      "email": "alexander_choi_11377@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "196-15 Hillside Ave",
      "zip": "11377"
    },
    {
      "id": "686506990871faaff3fa3cce0f839ba2",
      "name": "Emerth L. Coburn",
      "email": "emerth_l._coburn_11429@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "\"172-27 Highland Ave, Suite 1 B\"",
      "zip": "11429"
    },
    {
      "id": "9ad6c7fc4fbdaeb86c47cbd222c7ce38",
      "name": "Carlos Conception",
      "email": "carlos_conception_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "397265483b8ebcdfd0b69ac4e7aaca0f",
      "name": "Rany Condos",
      "email": "rany_condos_11210@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "9284acb7de90eabfee9aad39551c4f3a",
      "name": "Pedro Corzo",
      "email": "pedro_corzo_11354@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "241-08 140th Ave",
      "zip": "11354"
    },
    {
      "id": "58e00ddd7fcc9d8d49d1b5a0b343c58d",
      "name": "Pedro Corzo",
      "email": "pedro_corzo_11416@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "\"97-25 63rd Drive, 1st Floor\"",
      "zip": "11416"
    },
    {
      "id": "5410729edccad7eedba5d0a01f4a2a9a",
      "name": "Oluwatoyosi Dairo",
      "email": "oluwatoyosi_dairo_10453@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "225 east 149th street",
      "zip": "10453"
    },
    {
      "id": "6b60da7c0aaeacbe7e9673a80edb575f",
      "name": "Jose Fulgencio Delmonte",
      "email": "jose_fulgencio_delmonte_11237@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "7c33e1525f3ca02adf5cd37ab12b412b",
      "name": "Richard Desmond",
      "email": "richard_desmond_10033@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "400 Broadway",
      "zip": "10033"
    },
    {
      "id": "cdfcac2ba891a64253568ab5628ce8d8",
      "name": "Sellathurai Dhayaparan",
      "email": "sellathurai_dhayaparan_11220@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "1135 Eastern Parkway",
      "zip": "11220"
    },
    {
      "id": "cad83f66b1379822a1e38dc5885d17a7",
      "name": "Hua Ding",
      "email": "hua_ding_10040@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "470 Lenox Avenue Suite 1E",
      "zip": "10040"
    },
    {
      "id": "0becc5eb4dd48e6256a165033ed2549e",
      "name": "Reno DiScala",
      "email": "reno_discala_10031@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "330 WADSWORTH AVE #1A",
      "zip": "10031"
    },
    {
      "id": "df68ab2fdbf1cc66c0224f52746c71a5",
      "name": "Jing Jing Dong",
      "email": "jing_jing_dong_11422@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "150-34 Union Turnpike",
      "zip": "11422"
    },
    {
      "id": "80c46d73842e1d0a6571e80980c552db",
      "name": "Marie Dy-Guillaume",
      "email": "marie_dy-guillaume_10003@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "800 A 5th Avenue Suite 301",
      "zip": "10003"
    },
    {
      "id": "2235b9fa52a6ec24561c3df239bb9435",
      "name": "Nuzhat Faridi",
      "email": "nuzhat_faridi_10453@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "fe1f8c1fed48efd0ff493bb49682524b",
      "name": "Adil Farooki",
      "email": "adil_farooki_10021@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "e64e43433fe665c81feaba2f8550b400",
      "name": "Susan Fitzmaurice",
      "email": "susan_fitzmaurice_11230@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "2119 West 6th Street",
      "zip": "11230"
    },
    {
      "id": "a00e4a255584fca2a1a71ee8e64230f9",
      "name": "\"Farzana Flora, PA\"",
      "email": "\"farzana_flora,_pa_11373@gmail.com\"",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "230 Beach 102nd St",
      "zip": "11373"
    },
    {
      "id": "cc4227a997e0e50d1ba84d86f6e3b62a",
      "name": "Richard L. Francisco",
      "email": "richard_l._francisco_10468@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "320 East 188th Street",
      "zip": "10468"
    },
    {
      "id": "2e40552f62c332a1ab30ac5d7628a4ab",
      "name": "Perry Frankel",
      "email": "perry_frankel_11432@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "136-31 41st Avenue Suite 30",
      "zip": "11432"
    },
    {
      "id": "02793120b6ace8f2cde737ca1b56ba3b",
      "name": "Genya Frid",
      "email": "genya_frid_11237@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "2233 Nostrand Avenue",
      "zip": "11237"
    },
    {
      "id": "b6cbf23cdec39922f32bf45cbde7ada8",
      "name": "Dalia Frumkin",
      "email": "dalia_frumkin_11237@gmail.com",
      "specilization": "urologist",
      "borough": "Brooklyn",
      "address": "2233 Nostrand Avenue",
      "zip": "11237"
    },
    {
      "id": "440527faffde370d1536071786d52208",
      "name": "Jose Fulgencio-Delmonte",
      "email": "jose_fulgencio-delmonte_10030@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "522ee3ac60a2e804c43111b1ef064dd6",
      "name": "Gavriel Fuzaylov",
      "email": "gavriel_fuzaylov_11203@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "775b0328357293fb4bd4ec291e952704",
      "name": "Marco A. Garcia",
      "email": "marco_a._garcia_10459@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "3125 TIBBETT AVENUE",
      "zip": "10459"
    },
    {
      "id": "ef2f5d956ca087e722233496089ac1e9",
      "name": "Kira Gelfenshteyn",
      "email": "kira_gelfenshteyn_10461@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "3134 E. Tremont Ave",
      "zip": "10461"
    },
    {
      "id": "1e3981fda95c9d7ee28c1c7f25d5cc13",
      "name": "CHAUDHRY GHUMMAN",
      "email": "chaudhry_ghumman_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "90-01 A Rosevelt Ave.",
      "zip": "11355"
    },
    {
      "id": "7fb7c24531756dc1f2ae286ad36ef6fd",
      "name": "Chaudhary Ghumman",
      "email": "chaudhary_ghumman_10031@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "470 Lenox Avenue Suite 1p",
      "zip": "10031"
    },
    {
      "id": "d2f4a14df6b761c5cc0a7b8cf7ff7dfe",
      "name": "Rita Goldvug",
      "email": "rita_goldvug_10011@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "8ba6a90fed8ce4b93763830a5cf30b8b",
      "name": "Gerson Gomes",
      "email": "gerson_gomes_11204@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "8306 13th Avenue",
      "zip": "11204"
    },
    {
      "id": "7ea67fb9b46d0a5559e45e825ee7690a",
      "name": "Fausto Gonzalez",
      "email": "fausto_gonzalez_11230@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "100 Ross Street",
      "zip": "11230"
    },
    {
      "id": "71b8c825e1b9b56e2a4c4e14f2321f97",
      "name": "Carlos Gonzalez",
      "email": "carlos_gonzalez_11215@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "446 Mcdonald Ave",
      "zip": "11215"
    },
    {
      "id": "b07894f8e9caac2195c0cff6f33435ea",
      "name": "Josefa Grech",
      "email": "josefa_grech_11368@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "c0f25d338be1b862bdb14f250bda4ed7",
      "name": "Carl Guillaume",
      "email": "carl_guillaume_11209@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "99 moore st suite A",
      "zip": "11209"
    },
    {
      "id": "ff6638f80b682c6e8bee8a8a107aac08",
      "name": "Swarn Gupta",
      "email": "swarn_gupta_11373@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "111-14 76th Ave",
      "zip": "11373"
    },
    {
      "id": "c61b73360e84acbde1152c3752e18122",
      "name": "Rakesh Gupta",
      "email": "rakesh_gupta_11213@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "c66b3b62804208008080b4032b43316a",
      "name": "Gabriel Gustin",
      "email": "gabriel_gustin_11368@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "9425 59th Avenue Suite f7",
      "zip": "11368"
    },
    {
      "id": "792b45473b1e7cd0dee3579f0352b998",
      "name": "Mario Haro",
      "email": "mario_haro_11373@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "0868f600bc542e1f49c77a0836fbfcf5",
      "name": "Barnali Hasan",
      "email": "barnali_hasan_10472@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "305 e 149th st",
      "zip": "10472"
    },
    {
      "id": "4965d40ee3a41449e66df1cff3b860da",
      "name": "Ferdausi Hassan",
      "email": "ferdausi_hassan_11418@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "83-45 Dongan Ave",
      "zip": "11418"
    },
    {
      "id": "64ddc2a15971d4abaa6e2c53eb589162",
      "name": "Louis Heisler",
      "email": "louis_heisler_11217@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "\"33 8th Ave, Ground Floor\"",
      "zip": "11217"
    },
    {
      "id": "841c130f02437cf920e8096d0f5e397b",
      "name": "Derily Heredia",
      "email": "derily_heredia_11367@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "37-65 104TH. STREET",
      "zip": "11367"
    },
    {
      "id": "b7ad71d6f96036c8b972a90b0424fe78",
      "name": "Roxanne Hobbs-Green",
      "email": "roxanne_hobbs-green_11419@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "1236 FULTON STREET",
      "zip": "11419"
    },
    {
      "id": "cbb6b83bffce8ab77e23bbd132c38ba3",
      "name": "Afzal Hossain",
      "email": "afzal_hossain_10021@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "\"400 Broadway, 4th Floor\"",
      "zip": "10021"
    },
    {
      "id": "52ec430776c0fb2d260630ee0d8ef84e",
      "name": "Steve Hou",
      "email": "steve_hou_11205@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "f6309c0116df0c535f64985885c23ceb",
      "name": "Batool Hussaini",
      "email": "batool_hussaini_11356@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "3d0f4b9394fc670368a06a0e4edc0ca8",
      "name": "Elisabeth Immanuel-Alexis",
      "email": "elisabeth_immanuel-alexis_10033@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "\"3410-3418 Broadway, 2nd floor\"",
      "zip": "10033"
    },
    {
      "id": "c752827c9f15144dc2e484862a353047",
      "name": "George V Jhagroo",
      "email": "george_v_jhagroo_10032@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "ea03b2f4e6b88d052ad85fadcea20640",
      "name": "Mariela Jimenez",
      "email": "mariela_jimenez_11213@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "1335 Ocean Parkway",
      "zip": "11213"
    },
    {
      "id": "9174161c7e754badd09afac798512a35",
      "name": "Raymond Jones",
      "email": "raymond_jones_11238@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "60 Plaza St E # E",
      "zip": "11238"
    },
    {
      "id": "1e19c2304e41f5a051c548765b72ff86",
      "name": "Sotirios Kassapidis",
      "email": "sotirios_kassapidis_11354@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "96c6b2ac6a7bb7458669b894cce43dd9",
      "name": "Baruch Kassover",
      "email": "baruch_kassover_10467@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "ead07714b3f6b0dab4336fb26b90136d",
      "name": "Nazmul Hossain Khan",
      "email": "nazmul_hossain_khan_11228@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "1545 Atlantic Avenue #108",
      "zip": "11228"
    },
    {
      "id": "41a9fad69b4e43fc511754e2c5629388",
      "name": "\"Ferdous Khandker, MD\"",
      "email": "\"ferdous_khandker,_md_11218@gmail.com\"",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "596 Pennsylvania Avenue",
      "zip": "11218"
    },
    {
      "id": "635a1e3cb9bb061fc67e21615e496c4b",
      "name": "Larisa Khesina",
      "email": "larisa_khesina_10013@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "68 Bayard Street",
      "zip": "10013"
    },
    {
      "id": "01191fd22fd9a88e0e285d2c39571ea4",
      "name": "Kyungmee Kim",
      "email": "kyungmee_kim_11209@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "531 54 Street",
      "zip": "11209"
    },
    {
      "id": "986a4ca34a4268e916faea71fce5b99a",
      "name": "Pedro Kourtesis",
      "email": "pedro_kourtesis_11217@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "\"33 8th Ave, Ground Floor\"",
      "zip": "11217"
    },
    {
      "id": "949142583ee63e27a20a41d441c5bf94",
      "name": "Jay Kripalani",
      "email": "jay_kripalani_11355@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "\"40-04 Bowne Street, Suite 1i\"",
      "zip": "11355"
    },
    {
      "id": "42e3b864d67578892d362c773e1fea70",
      "name": "Dharamjit N. Kumar",
      "email": "dharamjit_n._kumar_11375@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "\"133-29 41st Road, Suite 2B\"",
      "zip": "11375"
    },
    {
      "id": "4d93648924ee61ff48c9c0d10f7d36c5",
      "name": "Ellimottil Kuriakose",
      "email": "ellimottil_kuriakose_10040@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "250 W 57th Street Ste 1430",
      "zip": "10040"
    },
    {
      "id": "36b0eaeca63907e696d1ba180a24385f",
      "name": "Nikolai LaGoduke",
      "email": "nikolai_lagoduke_11372@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "\"18016 Wexford Ter, Suite CA\"",
      "zip": "11372"
    },
    {
      "id": "ed224f63559b551fce872e78caa7a5fa",
      "name": "Wai-kuen Lam",
      "email": "wai-kuen_lam_11368@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "6f41a8c6c82f35c8f7142e1831cf9e65",
      "name": "Michael Landor",
      "email": "michael_landor_11377@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "97-03 Springfield Blvd",
      "zip": "11377"
    },
    {
      "id": "bd0b4635fa20280966386d3bc05d81ff",
      "name": "Mario Lavelanet",
      "email": "mario_lavelanet_10463@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "3200 Bronx Blvd",
      "zip": "10463"
    },
    {
      "id": "775a5d67834a073fa8bd66deb686082e",
      "name": "Norman Lee",
      "email": "norman_lee_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "25f22e35589776340007ae72cee5289e",
      "name": "Jae Lee",
      "email": "jae_lee_10458@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "60 W Kingsbridge Road",
      "zip": "10458"
    },
    {
      "id": "96eba85930d4f53071a66f0e16b89cc9",
      "name": "Hung-Sam Lee",
      "email": "hung-sam_lee_10453@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "de8118e8f0ab704603782342bfc25df1",
      "name": "Paul Leva",
      "email": "paul_leva_11375@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "42-72 kissena boulevard",
      "zip": "11375"
    },
    {
      "id": "ea84713a0de3d02a69b659be6f84bf77",
      "name": "Ginny Leva",
      "email": "ginny_leva_10010@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "d91f20c7ea3d2aed268db5eee4e11c86",
      "name": "Eduard Levy",
      "email": "eduard_levy_11210@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "94-13 Flatlands Ave. Suite 101",
      "zip": "11210"
    },
    {
      "id": "98cbb8354a0f228a9984d00b071be01f",
      "name": "Yuan Yi Li",
      "email": "yuan_yi_li_11435@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "4207 30th Avenue",
      "zip": "11435"
    },
    {
      "id": "fd71bed8ae5a8aba92451142b9c2903d",
      "name": "George Liu",
      "email": "george_liu_10028@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "\"380 2nd Avenue, Suite 1002\"",
      "zip": "10028"
    },
    {
      "id": "7017b611019b71178fa32a92f80aae6a",
      "name": "Mitchell Locke",
      "email": "mitchell_locke_11418@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "342 Beach 54th Street",
      "zip": "11418"
    },
    {
      "id": "546588fc5889793ce1b27e3c4b390afb",
      "name": "Paul Lombardi",
      "email": "paul_lombardi_11213@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "1407 46th Street",
      "zip": "11213"
    },
    {
      "id": "950e994294b6ba710af6726ff44166bb",
      "name": "George Lum",
      "email": "george_lum_10457@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1250 Shakespeare Avenue",
      "zip": "10457"
    },
    {
      "id": "6994c9c89c7049056fc40f8ad74d4014",
      "name": "Thomas Lyo",
      "email": "thomas_lyo_10013@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "\"629 W 185th St, 2nd Floor\"",
      "zip": "10013"
    },
    {
      "id": "9eab4e4c9794df2365f5e426d1cf25fd",
      "name": "David Magier",
      "email": "david_magier_11237@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Staten Island",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "61dadf2a997072f15d615d528f154b1d",
      "name": "Muntaz Majeed",
      "email": "muntaz_majeed_11377@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "97-03 Springfield Blvd",
      "zip": "11377"
    },
    {
      "id": "d38d7f5078e83a8bc6198c5e775b44c5",
      "name": "Muntaz Majeed",
      "email": "muntaz_majeed_10003@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "128 Mott Street Suite 302",
      "zip": "10003"
    },
    {
      "id": "cad133b2e4670c46e0d55f659cfbfb1c",
      "name": "Priya malik",
      "email": "priya_malik_11355@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "75-06 ELIOT AVE",
      "zip": "11355"
    },
    {
      "id": "495b924a8349c89950a0ebd4154407f2",
      "name": "PANKAJ MAMTORA",
      "email": "pankaj_mamtora_11226@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "372 Kingston Avenue",
      "zip": "11226"
    },
    {
      "id": "5fb7cb12089e4157068e2f62031744ee",
      "name": "Paul Mantia",
      "email": "paul_mantia_10028@gmail.com",
      "specilization": "cardiologist",
      "borough": "Staten Island",
      "address": "68 bayard street",
      "zip": "10028"
    },
    {
      "id": "d77255021814da28f515ecb04b44dd11",
      "name": "Alberto Marcano",
      "email": "alberto_marcano_11220@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "16d61b972d0425d61711b18fa82b00a5",
      "name": "Deborah Martin-Arila",
      "email": "deborah_martin-arila_11205@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "252 Driggs Avenue",
      "zip": "11205"
    },
    {
      "id": "5b556ef78f311a6e0349204503ae26ff",
      "name": "Sergio A. Martinez",
      "email": "sergio_a._martinez_11234@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "1641 Bergen Street",
      "zip": "11234"
    },
    {
      "id": "f3b90fd07fdb7a309b2f1ee6e4793054",
      "name": "Sergio A. Martinez",
      "email": "sergio_a._martinez_11209@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "a3eaa307ca3a23d3fe96ae0d02729655",
      "name": "Nadia Martinez de Pimentel",
      "email": "nadia_martinez_de_pimentel_11205@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "1517 Voorhies ave 1st floor",
      "zip": "11205"
    },
    {
      "id": "e4c8d14bc07f23c90108bb5d1177c188",
      "name": "Nadia Martinez de Pimentel",
      "email": "nadia_martinez_de_pimentel_10032@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "3d1efa98c43e323a5b1955b3ac653957",
      "name": "Maung Maung",
      "email": "maung_maung_10021@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "\"1385 York Avenue, Suite P2\"",
      "zip": "10021"
    },
    {
      "id": "c3db0cd8163315ebf12315bbd356015b",
      "name": "Kathleen McCabe",
      "email": "kathleen_mccabe_11224@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "9df915fecda7ea9a4016e211c1834b9b",
      "name": "Juan A. Medina",
      "email": "juan_a._medina_11210@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "4d7c00da454507af0e9ece518bc1ae96",
      "name": "GUSTAVO MELAMEDOFF",
      "email": "gustavo_melamedoff_11104@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "108-14 101th Avenue",
      "zip": "11104"
    },
    {
      "id": "b0c11c5e079bf3070766f2a125e7fabb",
      "name": "Carlos Melendez",
      "email": "carlos_melendez_11435@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "234-32 Merrick Blvd.",
      "zip": "11435"
    },
    {
      "id": "dc20a1eee1b3c094923e4d856883a53f",
      "name": "Naum Meyerovich",
      "email": "naum_meyerovich_11213@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "c772a42c9f614c3aedabb4dc768f0e53",
      "name": "Asadur R Miah",
      "email": "asadur_r_miah_11238@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "1446 Broadway Avenue",
      "zip": "11238"
    },
    {
      "id": "82f706a307302d201937243a24ca0871",
      "name": "Jovan Milos",
      "email": "jovan_milos_10012@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "160 E 72nd",
      "zip": "10012"
    },
    {
      "id": "636cbee2c0e0ce8a0b33ed57ffd2336c",
      "name": "Sameer K Misra",
      "email": "sameer_k_misra_10016@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "39 East Broadway Suite 307",
      "zip": "10016"
    },
    {
      "id": "9adb210f7500c113874b56b21129206f",
      "name": "Jonathan Mohrer",
      "email": "jonathan_mohrer_11366@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "\"64-17 Broadway, Woodside, NY 11377\"",
      "zip": "11366"
    },
    {
      "id": "cd0e373b418a34aa3168a5a8d05ba95a",
      "name": "Alexander Morden",
      "email": "alexander_morden_10023@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "196 canal st",
      "zip": "10023"
    },
    {
      "id": "ca3ce4534c83b43be221bb2338ceddae",
      "name": "Farzana Nizami",
      "email": "farzana_nizami_10467@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "e026848a0739d9caf9d37d69df19b099",
      "name": "Kenneth Nordlicht",
      "email": "kenneth_nordlicht_11379@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "eca5e8a35e99c3323f32edfadd76dd50",
      "name": "Olukayode Ojutiku",
      "email": "olukayode_ojutiku_11418@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "1497 Richmond Road",
      "zip": "11418"
    },
    {
      "id": "c379249053a349f549e2cfd55f6c13f7",
      "name": "Titus Okunola",
      "email": "titus_okunola_10037@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "123 West 86th Street",
      "zip": "10037"
    },
    {
      "id": "4ef5250f8b7f0164c8a884c10660ae0f",
      "name": "Nam H Om",
      "email": "nam_h_om_10027@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "161 Madison Ave",
      "zip": "10027"
    },
    {
      "id": "db7e0bb24652dbd921a3f2f1a155cf12",
      "name": "Zaw Oo",
      "email": "zaw_oo_11103@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "87-08 JUSTICE AVE SUITE CX",
      "zip": "11103"
    },
    {
      "id": "c655d785e31ae80a64bfadd7c7f8e20e",
      "name": "Himanshu Pandya",
      "email": "himanshu_pandya_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "93-15 Roosevelt Avenue",
      "zip": "11372"
    },
    {
      "id": "3fd32cfef7413f01aa5e622a9baa34d8",
      "name": "Shirishbhai Patel",
      "email": "shirishbhai_patel_11217@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "4ac066862d0a71880f82538e17a61ea7",
      "name": "Salvador Perez",
      "email": "salvador_perez_10011@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "1e917b1bc7844e478b13d37377f26ed4",
      "name": "Richard Perrin",
      "email": "richard_perrin_11372@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "125 11 LIBERTY AVENUE",
      "zip": "11372"
    },
    {
      "id": "3b606ee128384ac2a7265de25643c8f8",
      "name": "Afroz Pervin",
      "email": "afroz_pervin_11230@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "178 EAST 85TH STREET 4TH FLOOR",
      "zip": "11230"
    },
    {
      "id": "3e3c96943451de8df7ae19b53e67b155",
      "name": "Camille Philippe",
      "email": "camille_philippe_10011@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "a0a446e90dbdcffe4462dab941a9de38",
      "name": "Modi Phiroza",
      "email": "modi_phiroza_10021@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "ed148f9bdd83585e6c6d253f012a0d1c",
      "name": "Ramon Pimentel",
      "email": "ramon_pimentel_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "c50a724fe604d1ed795c87c3abfca6d8",
      "name": "Mikhail Pinkhasov",
      "email": "mikhail_pinkhasov_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "6c3cc9cb6e08eb5145d28f0931d68ad6",
      "name": "Mikhail Pinkhasov",
      "email": "mikhail_pinkhasov_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "211-16 Union Turnpike",
      "zip": "11372"
    },
    {
      "id": "cb5ca2c447bc1ae225b6df218a0734af",
      "name": "Marlene Pitamber",
      "email": "marlene_pitamber_11354@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "\"133-47 Sanford Avenue, Suite 1H\"",
      "zip": "11354"
    },
    {
      "id": "3ce53938fec6e3f9f5e00bac3595341d",
      "name": "Diego Ponieman",
      "email": "diego_ponieman_10002@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "911 Park Ave",
      "zip": "10002"
    },
    {
      "id": "f530f51e2017dd7204fb0cfb93e0d44f",
      "name": "Vishwanath Puttaswamy Gowda",
      "email": "vishwanath_puttaswamy_gowda_10453@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "225 east 149th street",
      "zip": "10453"
    },
    {
      "id": "14fc149e292d64362c30d5dad9962f79",
      "name": "Vi Quach",
      "email": "vi_quach_11211@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "44da0dfac7325df83b8b210f94a499bc",
      "name": "Pervaiz Qureshi",
      "email": "pervaiz_qureshi_10453@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "1931 Williamsbridge Road",
      "zip": "10453"
    },
    {
      "id": "7c970949af575b8d0e80d1a17d6c2655",
      "name": "Mohammed M. Rahman",
      "email": "mohammed_m._rahman_10304@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "-305 Seguine Avenue",
      "zip": "10304"
    },
    {
      "id": "82176523c2cd74ed0f322ac2b9168fdb",
      "name": "Wendy Ramirez",
      "email": "wendy_ramirez_11040@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "2099 Forest Ave",
      "zip": "11040"
    },
    {
      "id": "7578da50ec2c20e0fa2ed8a09dc348a3",
      "name": "Mohammed Rashid",
      "email": "mohammed_rashid_10032@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "435 FORT WASHINGTON AVE",
      "zip": "10032"
    },
    {
      "id": "d407001055ffd666f0767ed173a62baa",
      "name": "Anuja Reddy",
      "email": "anuja_reddy_11374@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "\"176-60, Union turnpike, Suite 145\"",
      "zip": "11374"
    },
    {
      "id": "047f8e63cf34ccb25a69c015456a671d",
      "name": "Daniel Reinharth",
      "email": "daniel_reinharth_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "70-17 37 Avenue",
      "zip": "11372"
    },
    {
      "id": "1c896a52580b704d3d59e26446aaac45",
      "name": "Marina Reznitsky-Royzman",
      "email": "marina_reznitsky-royzman_11373@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "8cd6625ee08e4e9f187971f2cddda330",
      "name": "Michael Richter",
      "email": "michael_richter_11385@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "38-34 Parsons blvd #1A",
      "zip": "11385"
    },
    {
      "id": "59475e38ed8c7738d9a3f06eceb7f3e3",
      "name": "Gerald Roberts",
      "email": "gerald_roberts_11372@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "b7acf60aadc0bdeb96fe891f46b8df1c",
      "name": "Sandra Robinson",
      "email": "sandra_robinson_11211@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "1911 Avenue L",
      "zip": "11211"
    },
    {
      "id": "4f35a4d84e441675ba422bee5ff9f8e9",
      "name": "Rafael Rodriguez",
      "email": "rafael_rodriguez_11236@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "1368 NOSTRAND AVE",
      "zip": "11236"
    },
    {
      "id": "eda51ea45f4d979a79fa3214971c92e2",
      "name": "Rafael Rodriguez",
      "email": "rafael_rodriguez_11355@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "90-01 A Rosevelt Ave.",
      "zip": "11355"
    },
    {
      "id": "50a773f8f21e3db35a546d46af0b8802",
      "name": "Marlene Rodriguez",
      "email": "marlene_rodriguez_11356@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "5f667623886210b9690bdbc11a6178db",
      "name": "Jaime F. Roman",
      "email": "jaime_f._roman_10016@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "64 Nagle Avenue",
      "zip": "10016"
    },
    {
      "id": "844af8338422e6941fd02df1018e3910",
      "name": "Jaime Roman",
      "email": "jaime_roman_11220@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "92b8d203f4c073f5622303c570da29a6",
      "name": "Sidney Rosman",
      "email": "sidney_rosman_10033@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "333 w. 51st street",
      "zip": "10033"
    },
    {
      "id": "332be2ea24d1c49b82d85a75d5a75ee1",
      "name": "Lance Rubel",
      "email": "lance_rubel_11364@gmail.com",
      "specilization": "toxicologists",
      "borough": "Jackson Heights",
      "address": "86-04 117th. street",
      "zip": "11364"
    },
    {
      "id": "43218543e58ab7afc1bc16deb81a7af7",
      "name": "Jessica Rubinstein",
      "email": "jessica_rubinstein_10016@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "39 East Broadway Suite 307",
      "zip": "10016"
    },
    {
      "id": "17283a21fe4163a44ee0ce4d754112aa",
      "name": "Edison Ruiz",
      "email": "edison_ruiz_10003@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "\"48 Market St., Suite B\"",
      "zip": "10003"
    },
    {
      "id": "9658fa4f6bc23316bbcf7e83a6921551",
      "name": "Eliahu Samra",
      "email": "eliahu_samra_11219@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "540 East New York Avenue",
      "zip": "11219"
    },
    {
      "id": "c2f16a4f561c294f6fa4a086a6eb1795",
      "name": "Bella Sandler",
      "email": "bella_sandler_11373@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "\"139 Centre Suite, Suite 506\"",
      "zip": "11373"
    },
    {
      "id": "85dbc5bdde3dfd1926e3292295fe623b",
      "name": "Felicitas Santiago",
      "email": "felicitas_santiago_11213@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "563 Grand Street",
      "zip": "11213"
    },
    {
      "id": "076b60dce6f6dd3a32f1847ae361f4f6",
      "name": "Marissa Santos",
      "email": "marissa_santos_11372@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "\"87-81, 169th Street\"",
      "zip": "11372"
    },
    {
      "id": "78d85fb3b948f19872d1f415291bb40f",
      "name": "Marissa Santos",
      "email": "marissa_santos_11366@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "219-02 Linden Blvd",
      "zip": "11366"
    },
    {
      "id": "732998bb7abaf9e2a507fc8680f5a434",
      "name": "Robert Sarnataro",
      "email": "robert_sarnataro_11205@gmail.com",
      "specilization": "psychologist",
      "borough": "Manhattan",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "0a9391ecb523bf1c8fb5dba671491e1a",
      "name": "Sazia Setaruddin",
      "email": "sazia_setaruddin_10024@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "102 East 22 St Suite 1",
      "zip": "10024"
    },
    {
      "id": "71d3c5d23130adb437ce596c53673cb4",
      "name": "Xiandong Shi",
      "email": "xiandong_shi_10016@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "629 W 185th St",
      "zip": "10016"
    },
    {
      "id": "6d46224ea783a3af2b31a172d98c49e2",
      "name": "Shelly Shi",
      "email": "shelly_shi_10011@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "8a7eaf6aec5fa0dc8343fc939a00471d",
      "name": "Michael Shirazi",
      "email": "michael_shirazi_11432@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "75-17 41ST AVE",
      "zip": "11432"
    },
    {
      "id": "0649b5bf241f88e84e913f197b12b875",
      "name": "Urmila Shivaram",
      "email": "urmila_shivaram_10453@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "ee57dbe4a7c668447bf2f4765ac2ff3e",
      "name": "Dong Hong Shong",
      "email": "dong_hong_shong_11210@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "1742 East 13th Street",
      "zip": "11210"
    },
    {
      "id": "29e874ffb8303e8ad665867aa31f75f5",
      "name": "Kee Shum",
      "email": "kee_shum_10032@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "63 Catherine St.",
      "zip": "10032"
    },
    {
      "id": "b748a07ac58988aff10ca7f7ae7f7582",
      "name": "Gunwant Singh",
      "email": "gunwant_singh_11212@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "3016 Glenwood Rd",
      "zip": "11212"
    },
    {
      "id": "f67bb6b9af05c0c9819ef37ca7399411",
      "name": "WON SOHN",
      "email": "won_sohn_10013@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "\"629 W 185th St, 2nd Floor\"",
      "zip": "10013"
    },
    {
      "id": "16d5ab6fc8da447d82b3884e0ac0680f",
      "name": "Alain Sosa",
      "email": "alain_sosa_11418@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "196-21 Hillside Avenue",
      "zip": "11418"
    },
    {
      "id": "44ef48a724e9a769093efbd9fe29257c",
      "name": "Lilliam Soto-Alcantara",
      "email": "lilliam_soto-alcantara_11209@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "3016 GLENWOOD RD",
      "zip": "11209"
    },
    {
      "id": "073c4d35c18dadc1773e8f935fd0cc24",
      "name": "Steven Straus",
      "email": "steven_straus_10013@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "19 Hamilton Place",
      "zip": "10013"
    },
    {
      "id": "befd2a81f865a68d628d87ff9c1ef26d",
      "name": "Amy Su",
      "email": "amy_su_10458@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "706209d68d6d58ee3a55df2eb4165e04",
      "name": "Nuzhat Syed",
      "email": "nuzhat_syed_11374@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "94-11 59th Avenue Suite A-10",
      "zip": "11374"
    },
    {
      "id": "01c7b43a9b12725b44b31037039a5b96",
      "name": "Xin Tan",
      "email": "xin_tan_11230@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "1103 Cortelyou Road",
      "zip": "11230"
    },
    {
      "id": "41cfd148141f1a9ecb88aa87d6749de1",
      "name": "Afshin Tavakoly",
      "email": "afshin_tavakoly_11355@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "81a2ff1b8ebf3b5ebfe1cd5417bea762",
      "name": "Henry Ting",
      "email": "henry_ting_11211@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "1911 Avenue L",
      "zip": "11211"
    },
    {
      "id": "7b6a8f1558c9a20ca4b7c43872d14402",
      "name": "Amanda Valencia",
      "email": "amanda_valencia_10013@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "3ba3a63280a508d02853fcbfdba8d8b5",
      "name": "Arumugan Vasanthi",
      "email": "arumugan_vasanthi_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "28875c3c212ce913533a998b121f95fd",
      "name": "Yan Wang",
      "email": "yan_wang_10013@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "68 Bayard Street",
      "zip": "10013"
    },
    {
      "id": "b149fd081b477c917cf1211a767e4a31",
      "name": "Richard Wang",
      "email": "richard_wang_11385@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "141-49 70 Road",
      "zip": "11385"
    },
    {
      "id": "d774491fe47706c38dbd1b9363e52169",
      "name": "Daniel Wasserman",
      "email": "daniel_wasserman_11368@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "6fbf43bc5abe486b5d2c87d47e3220b6",
      "name": "Xianyang Yio",
      "email": "xianyang_yio_11220@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "\"160 Parkside Ave, Suite 1D\"",
      "zip": "11220"
    },
    {
      "id": "49638003d98b918a8059f16e2b9130f3",
      "name": "Marc Yunis",
      "email": "marc_yunis_11234@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1641 Bergen Street",
      "zip": "11234"
    },
    {
      "id": "78a9f9448fbd52016a054beb6eca8197",
      "name": "Jiansheng Zhao",
      "email": "jiansheng_zhao_10027@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "314 W. 14th Street",
      "zip": "10027"
    },
    {
      "id": "8a0ed60eba6edeb9e29e1c09f7444c92",
      "name": "Zhu-Ping Zhou",
      "email": "zhu-ping_zhou_11372@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "211-16 Union Turnpike",
      "zip": "11372"
    },
    {
      "id": "aeffd62bdd3f0dd8d90bb52652e07d4d",
      "name": "Ming Zhu",
      "email": "ming_zhu_11368@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "70aaf82ecc4b0b134dfe554da0012aa9",
      "name": "Rabeena Fazal",
      "email": "rabeena_fazal_11101@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "\"41-61 Kissena Boulevard, Suite 20\"",
      "zip": "11101"
    },
    {
      "id": "eabb093c142e3d6e365cbcffb7aa8091",
      "name": "Maria Duran-Soriano",
      "email": "maria_duran-soriano_10040@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "629W 185st",
      "zip": "10040"
    },
    {
      "id": "9a3b644bc2e56cac9d7693a7c69769c5",
      "name": "Intazam Khan",
      "email": "intazam_khan_10457@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "137b0593474a21a51abadf277c7133f6",
      "name": "Vikas Varma",
      "email": "vikas_varma_10467@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "8347fcdfd7af83b562feaa2e878e8f62",
      "name": "Geddis Abel-Bey",
      "email": "geddis_abel-bey_11411@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "13620 38ave ste 6L",
      "zip": "11411"
    },
    {
      "id": "95ed138472868f26e9b75526081db1e1",
      "name": "Marina Alayev",
      "email": "marina_alayev_10033@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "40 Montgomery St",
      "zip": "10033"
    },
    {
      "id": "bea8be3e894a7183ec9e9e084606f8d2",
      "name": "Alexandra Altchek",
      "email": "alexandra_altchek_10028@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "160 East 32nd Street #102",
      "zip": "10028"
    },
    {
      "id": "fc6f473f69e96d03c374843adc94b850",
      "name": "Frank Arbucci",
      "email": "frank_arbucci_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "13347 Sanford Ave",
      "zip": "11372"
    },
    {
      "id": "35746014729179a74559343fb5af7436",
      "name": "Yehuda Bar-Zvi",
      "email": "yehuda_bar-zvi_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "\"133-36 41st Road, Suite 1\"",
      "zip": "11372"
    },
    {
      "id": "da7c4ba8936235d46ad8ee9b37e41a8a",
      "name": "Jay Bassell",
      "email": "jay_bassell_11373@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "e2195762682b4678c0c3e90273012134",
      "name": "Smita Biswas",
      "email": "smita_biswas_10032@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "3fde9e3aa2c0495245b86d483742c51c",
      "name": "Bina Chaudhari-Mody",
      "email": "bina_chaudhari-mody_11224@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "6b03b1fb6443065e00ed7c24b830656b",
      "name": "David Chiang",
      "email": "david_chiang_10021@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "138a8700614ea9a7b52d0d32143f6706",
      "name": "Rabeya Chowdhury",
      "email": "rabeya_chowdhury_10458@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "78c998eee283c86ff7e40542b1a2a9b0",
      "name": "Rabeya Chowdhury",
      "email": "rabeya_chowdhury_11211@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "21737c92198076025b6a21877d84834f",
      "name": "Hajoon Chun",
      "email": "hajoon_chun_11364@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "86-04 117th. street",
      "zip": "11364"
    },
    {
      "id": "330045d27e8021c37d07d56c2dfcab62",
      "name": "Abeer Dabbas",
      "email": "abeer_dabbas_10033@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "\"104 Vermilyea Avenue, Suite B\"",
      "zip": "10033"
    },
    {
      "id": "5442a0ba418dbe16d8de94d656fdadc7",
      "name": "Rosa Gonzalez-Freire",
      "email": "rosa_gonzalez-freire_11226@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "834 CONEY ISLAND AVENUE",
      "zip": "11226"
    },
    {
      "id": "8b0d7c11a99c0aff487e63cdfcc6cfda",
      "name": "\"Gary Guarnaccia, MD\"",
      "email": "\"gary_guarnaccia,_md_11374@gmail.com\"",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "25-92 steinway street",
      "zip": "11374"
    },
    {
      "id": "0578edef29f71de5eb600d411233a596",
      "name": "Meenu Gupta",
      "email": "meenu_gupta_11209@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "b6a93ee20ce5aabdeaed941125a08185",
      "name": "Helen Hsieh",
      "email": "helen_hsieh_10312@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "4335 Hylan Blvd",
      "zip": "10312"
    },
    {
      "id": "e185bc0c6af35b523bd29f37ab4f34b2",
      "name": "Petr Itzhak",
      "email": "petr_itzhak_10453@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "675 Nereid Avenue",
      "zip": "10453"
    },
    {
      "id": "b3aa852234fda6dc9d12a7ec9254e6f8",
      "name": "Michelle Jacobs",
      "email": "michelle_jacobs_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "b153051e05ba47b262c8bcfdc901d186",
      "name": "Payman Jarrahy",
      "email": "payman_jarrahy_10044@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "495c92c70fc4241a783570bec16132a3",
      "name": "Max Jean-Gilles",
      "email": "max_jean-gilles_10469@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "3250 THIRD AVENUE",
      "zip": "10469"
    },
    {
      "id": "7bad8d7c15eb2b6a4f916dc6cc2170b3",
      "name": "Ing-Yann Jeng",
      "email": "ing-yann_jeng_11220@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "23cc681ae32ef800fafbb10efbf62974",
      "name": "Judith Jones",
      "email": "judith_jones_11374@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "25-92 steinway street",
      "zip": "11374"
    },
    {
      "id": "8068948068c424c3f6b3579fcae5835d",
      "name": "Sarita Khatri",
      "email": "sarita_khatri_11213@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "5054603ccabe3f413bf7aab2681606c5",
      "name": "Anu Kothari",
      "email": "anu_kothari_11204@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "391 Eastern Parkway",
      "zip": "11204"
    },
    {
      "id": "e6683389a3a8a84f7fa3fad0239a2e5d",
      "name": "Jean Langhans",
      "email": "jean_langhans_11432@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "\"97-77 Queens Blvd. Suite 900,\"",
      "zip": "11432"
    },
    {
      "id": "a99f48fce125a4acf384c5730255299c",
      "name": "Lomane Legros",
      "email": "lomane_legros_10010@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "2df97c72f0cfea1a4c43462576eaf4f2",
      "name": "Derek Liang",
      "email": "derek_liang_10462@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "3010 Grand Concourse",
      "zip": "10462"
    },
    {
      "id": "d7662900fbd36452bcd33621c9e8391e",
      "name": "Cherenfant Lucot",
      "email": "cherenfant_lucot_10024@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "\"99 University Place, 3Rd floor\"",
      "zip": "10024"
    },
    {
      "id": "a9078cf318a8b81779d9a5f689353455",
      "name": "George McMillan",
      "email": "george_mcmillan_10012@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "245 East 35th Street",
      "zip": "10012"
    },
    {
      "id": "459a1b0283bbb330b96320d9066c7fcc",
      "name": "Angela Meikle",
      "email": "angela_meikle_10453@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "64789d3e741e464fbe17043b0ca5eb06",
      "name": "Helen Na-Chuang",
      "email": "helen_na-chuang_11205@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "a51e426b4d811635549e6d4963d83602",
      "name": "Emeka E. Okeke",
      "email": "emeka_e._okeke_11223@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "43-12 43rd Street",
      "zip": "11223"
    },
    {
      "id": "486b11f435ded8f1219710d5189ddaa6",
      "name": "Godwin Onyeike",
      "email": "godwin_onyeike_11355@gmail.com",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "c7c520420076ffa08b8a1c33f4a3ff5a",
      "name": "Weimin Qu",
      "email": "weimin_qu_11219@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "540 East New York Avenue",
      "zip": "11219"
    },
    {
      "id": "270c6a80333e0b939604b83c024b5c14",
      "name": "Samina Raghid",
      "email": "samina_raghid_11215@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "185 Canal St",
      "zip": "11215"
    },
    {
      "id": "7d6dd0e0ed5eb79c42453dadd63b3df6",
      "name": "Devbala Ramanathan",
      "email": "devbala_ramanathan_10453@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "4f1509c6e37d513fe938d32ec9d9371f",
      "name": "Devbala Ramanathan",
      "email": "devbala_ramanathan_11432@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "136-20 38th Ave",
      "zip": "11432"
    },
    {
      "id": "a2a55b13408cdaee420a66a8b001ad25",
      "name": "Claudia Ravins",
      "email": "claudia_ravins_10462@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "3010 Grand Concourse",
      "zip": "10462"
    },
    {
      "id": "1b89b8a1e03e0a74e32dd24be1a2491e",
      "name": "Rehana Sajjad",
      "email": "rehana_sajjad_11236@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "1135 eastern parkway",
      "zip": "11236"
    },
    {
      "id": "37bf3f2edf15587b7b0b4a216f4f590c",
      "name": "Khalil Solaimanzadeh",
      "email": "khalil_solaimanzadeh_11354@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "427c0fdd942aed8c98cce964f4d46a9e",
      "name": "Eman Soultan",
      "email": "eman_soultan_10031@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "111 West 110 Street",
      "zip": "10031"
    },
    {
      "id": "8ab210491055e4e7493e59b896c987fc",
      "name": "Udele Taylor-Randall",
      "email": "udele_taylor-randall_10024@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "155 W. 19th St",
      "zip": "10024"
    },
    {
      "id": "29bcfdf95d8591fbb68f81dd4490c16f",
      "name": "Michael Terrani",
      "email": "michael_terrani_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "235-20 147th Avenue",
      "zip": "11372"
    },
    {
      "id": "d2284ec975551ee0602698ea10629a45",
      "name": "Angela Todd",
      "email": "angela_todd_11435@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "87 08 Justice Avenue",
      "zip": "11435"
    },
    {
      "id": "c53dedabdd269622e1eff16283a13752",
      "name": "Laurence Turnier-Antione",
      "email": "laurence_turnier-antione_11203@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "3f2b9f4ab957641e9224facd33a6d020",
      "name": "Kendy Verpile",
      "email": "kendy_verpile_10032@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "a5019f717f57c6a5a7100fa3d171ec19",
      "name": "Lorraine Williams",
      "email": "lorraine_williams_11435@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "234-32 Merrick Blvd.",
      "zip": "11435"
    },
    {
      "id": "1b4fd0ab8d40819306aedf50e65479b8",
      "name": "Zili He",
      "email": "zili_he_11375@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "86-02 MUSKET STREET",
      "zip": "11375"
    },
    {
      "id": "d494d737b2ac198a25710a60705716a0",
      "name": "Daniel Izon",
      "email": "daniel_izon_11217@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "b1ef9be57e51b90c11d49a44745a1c16",
      "name": "Alan Katz",
      "email": "alan_katz_10011@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Bronx",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "ff3eedb4ef259dcb45410477196bcdb5",
      "name": "Vincent Yeung",
      "email": "vincent_yeung_10028@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "\"380 2nd Avenue, Suite 1002\"",
      "zip": "10028"
    },
    {
      "id": "26e9108e422ce068f68a66f738104706",
      "name": "Karen Allison",
      "email": "karen_allison_10458@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "e811952f0f1a3a5b55e4b26d22e17052",
      "name": "Ted Du",
      "email": "ted_du_11211@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "6e5e496487893064cf86c7374772b5e0",
      "name": "Zia Ahmed",
      "email": "zia_ahmed_10013@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "91cf3e6d6a0ff19949e165c25695d847",
      "name": "Bahram Alyeshmerni",
      "email": "bahram_alyeshmerni_10013@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "33 WEST 125TH STREET",
      "zip": "10013"
    },
    {
      "id": "81c114f402fe9d4dcad1e16629524604",
      "name": "Israel Aviles",
      "email": "israel_aviles_10013@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "dbdf88f5bc31fc3c365cb8c0e039b96b",
      "name": "RICHARD BELLI",
      "email": "richard_belli_10044@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "228f036133ab8c97c8cfa1ad93688f42",
      "name": "Jeffrey Belmon",
      "email": "jeffrey_belmon_11374@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "9542 Roosevelt Avenue",
      "zip": "11374"
    },
    {
      "id": "b1d2a57fe0b25dee9fc82bd435821c1f",
      "name": "Avi Bitton",
      "email": "avi_bitton_11210@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "\"1335 Linden Blvd, Suite 117\"",
      "zip": "11210"
    },
    {
      "id": "1b547314d107e46e05f143e85a913463",
      "name": "Ira Casson",
      "email": "ira_casson_10021@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "e546fe3170de25a3f471b4a05652fbdb",
      "name": "Wilson Chau",
      "email": "wilson_chau_10030@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "3708eae8077217f3d1bd5cd6f138f732",
      "name": "Thomas Chen",
      "email": "thomas_chen_11418@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "8656 105th Street",
      "zip": "11418"
    },
    {
      "id": "3fa5dc125a58f68c083be12c8493d92f",
      "name": "Jeffrey Chess",
      "email": "jeffrey_chess_11418@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "1497 Richmond Road",
      "zip": "11418"
    },
    {
      "id": "e8fda70a21a5647283a973c566585489",
      "name": "Rilee Chowlera",
      "email": "rilee_chowlera_11210@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "f72a22814dd2c4557d132e16df64b3c7",
      "name": "Beppy Edasery",
      "email": "beppy_edasery_11236@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "2742 brighton 8th street",
      "zip": "11236"
    },
    {
      "id": "ffb36c51b48176eeb8b10cc09cb0fb3b",
      "name": "Olga Falkowski",
      "email": "olga_falkowski_10022@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "158 East 84th St",
      "zip": "10022"
    },
    {
      "id": "2f0edbc6910954cbe4ea337a4bfc1d2b",
      "name": "Joseph Grossman",
      "email": "joseph_grossman_10040@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "470 Lenox Avenue Suite 1E",
      "zip": "10040"
    },
    {
      "id": "8c92b5aa4d50896ee740cc9d18405dde",
      "name": "Mary X. Hu",
      "email": "mary_x._hu_11372@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "142-03 60th Ave",
      "zip": "11372"
    },
    {
      "id": "d125a78dc14a5a090165d9236f46a2f5",
      "name": "Melville Hughes",
      "email": "melville_hughes_10013@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "338 E 30th St",
      "zip": "10013"
    },
    {
      "id": "30c51ecf3dc8838d74ad4a02162845b3",
      "name": "Haiyan Lu",
      "email": "haiyan_lu_11212@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "3016 Glenwood Rd",
      "zip": "11212"
    },
    {
      "id": "69bbd60aeb2c80c60f7fca03db0adbbb",
      "name": "Andrew Maran",
      "email": "andrew_maran_11211@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "5fb4f636fed62e8b6041f0fcf2226a39",
      "name": "Kevin Myers",
      "email": "kevin_myers_10451@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "2960 Grand Concourse L1",
      "zip": "10451"
    },
    {
      "id": "61271668e36af758fdc60fb9750076ce",
      "name": "Dilruba Nabi",
      "email": "dilruba_nabi_10021@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "\"8 Chatham Square, Suite 800\"",
      "zip": "10021"
    },
    {
      "id": "a466a7eef3a48396368d47c65adba230",
      "name": "Ramakrishnayya Pattumudi",
      "email": "ramakrishnayya_pattumudi_10016@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "39 East Broadway Suite 307",
      "zip": "10016"
    },
    {
      "id": "37e9e23865bfdceffb0427bbf14811b4",
      "name": "Lawrence Rosman",
      "email": "lawrence_rosman_11375@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "136-40 39th Avenue",
      "zip": "11375"
    },
    {
      "id": "8ac3ec3e71964c5f27cccd7fa1b5fb26",
      "name": "David Steiner",
      "email": "david_steiner_11373@gmail.com",
      "specilization": "nephrologist",
      "borough": "Staten Island",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "6919a33726d3fe81bf3bda3a5b4a0ae0",
      "name": "Yong S. Tak",
      "email": "yong_s._tak_11418@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "3907 Prince St",
      "zip": "11418"
    },
    {
      "id": "2ee7391edbd308cb0e2f85386a48efc4",
      "name": "Jingling Tang",
      "email": "jingling_tang_10312@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "4335 Hylan Blvd",
      "zip": "10312"
    },
    {
      "id": "fe9e76556b5ec369add03a76677c5d2f",
      "name": "Laura Victor",
      "email": "laura_victor_11372@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "70-17 37 Avenue",
      "zip": "11372"
    },
    {
      "id": "a4d91194ff7157b52e6b55c2ba60fa91",
      "name": "Brett Wu",
      "email": "brett_wu_11203@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "8701A Shore Road",
      "zip": "11203"
    },
    {
      "id": "d92f560a765e6155702acde07f9a6047",
      "name": "Dahua Zhou",
      "email": "dahua_zhou_11418@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "64-15 Fresh Pond Rd",
      "zip": "11418"
    },
    {
      "id": "490641f302fb860f26ae4233128145b6",
      "name": "Edwin Chan",
      "email": "edwin_chan_11220@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "11c4c92ec3cad14b3111edac8ee7c1f1",
      "name": "Antonia Subletas Mayol",
      "email": "antonia_subletas_mayol_11422@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "64-12 Fresh Pond Rd",
      "zip": "11422"
    },
    {
      "id": "9cf5807f082669f5d15afc787dc9662f",
      "name": "Chhaya Chakrabarti",
      "email": "chhaya_chakrabarti_11356@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "209-22 Hillside Avenue",
      "zip": "11356"
    },
    {
      "id": "f674103d0877276f1b3c35e02e19578c",
      "name": "Eloisa Acosta",
      "email": "eloisa_acosta_11356@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "\"8330 Vietor Avenue, Suite P-1\"",
      "zip": "11356"
    },
    {
      "id": "9b62aefa0bc9d893662ab71fdf72736b",
      "name": "Zia Ahmed",
      "email": "zia_ahmed_11210@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "443 Linden Blvd",
      "zip": "11210"
    },
    {
      "id": "392a2f5031fa3b825c1f6eb569cd629d",
      "name": "Shaheen Ahmed",
      "email": "shaheen_ahmed_11238@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "60 Plaza St E # E",
      "zip": "11238"
    },
    {
      "id": "ac7b2eba19cd2b3b9fb5787b9281603d",
      "name": "Nayaz Ahmed",
      "email": "nayaz_ahmed_11691@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "0bf4da136a94b61da6e7fe56444ba24d",
      "name": "Nayaz Ahmed",
      "email": "nayaz_ahmed_11355@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "87-46 168th Street",
      "zip": "11355"
    },
    {
      "id": "4129e8ce9a15961dd6599529f5228723",
      "name": "Qurrath Ain",
      "email": "qurrath_ain_11203@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "c50cd196f8541d7845c2bf6d553adbe0",
      "name": "Adedokun Akinyooye",
      "email": "adedokun_akinyooye_11215@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "185 Canal St",
      "zip": "11215"
    },
    {
      "id": "62cc539d9cd6219f2b8b58dd60019f4f",
      "name": "Magalie Alfred",
      "email": "magalie_alfred_10468@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "444 Willis Avenue",
      "zip": "10468"
    },
    {
      "id": "10f552759cd26e3ba0c298a322240593",
      "name": "Catherine Alikor Mpi",
      "email": "catherine_alikor_mpi_10461@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "3134 E. Tremont Ave",
      "zip": "10461"
    },
    {
      "id": "e48e47ae3427670f0ea89468f6e7328f",
      "name": "Francisco Alonso",
      "email": "francisco_alonso_11379@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "b1b959963231308e4a1e161cacc2fbf9",
      "name": "Erica Amianda",
      "email": "erica_amianda_10305@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "85c798355c8b10437de27fa0337ae9b3",
      "name": "Nicasio Arana",
      "email": "nicasio_arana_11204@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "\"839 58th Street, 2nd Floor\"",
      "zip": "11204"
    },
    {
      "id": "9dbfbf5da74d1f336dbdcf32e2438972",
      "name": "Nicasio Arana",
      "email": "nicasio_arana_10028@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "58 E. 116th St",
      "zip": "10028"
    },
    {
      "id": "36fcaec025ea22fe4ac32f3ce78c57f6",
      "name": "Maritza Archbold",
      "email": "maritza_archbold_10457@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "1250 Shakespeare Avenue",
      "zip": "10457"
    },
    {
      "id": "aaff485b5954c585890700a8de7103a5",
      "name": "Richard Arias",
      "email": "richard_arias_11217@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "ed5fd95d2fb10efd093e9b59399981e6",
      "name": "Thangamuthu Arumugam",
      "email": "thangamuthu_arumugam_10011@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Staten Island",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "ce95a31446f474b688bf7bcbbf35fd85",
      "name": "Toni Aspinall-Daley",
      "email": "toni_aspinall-daley_11213@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "dbf1450254f091ce721fdf04f267b304",
      "name": "Daniela Atanassova-Lineva",
      "email": "daniela_atanassova-lineva_10467@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "2847 Webster Avenue",
      "zip": "10467"
    },
    {
      "id": "faff8c18ab1d9cc9688464543950ed1f",
      "name": "Elizabeth Avaricio",
      "email": "elizabeth_avaricio_11210@gmail.com",
      "specilization": "psychologist",
      "borough": "Manhattan",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "b30d969c54205828a6dd07d2ea472eb2",
      "name": "Shabana Azam",
      "email": "shabana_azam_10003@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "2-12 Sickles Street",
      "zip": "10003"
    },
    {
      "id": "f4b1354db41f4c07fb33c5305c1fc3bd",
      "name": "Jean-Robert Boursiquot",
      "email": "jean-robert_boursiquot_11419@gmail.com",
      "specilization": "urologist",
      "borough": "Brooklyn",
      "address": "114-06 Queens Blvd",
      "zip": "11419"
    },
    {
      "id": "48af9a8d8f82989150731af46e5f784a",
      "name": "Jean-Robert Boursiquot",
      "email": "jean-robert_boursiquot_11357@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "\"98-11 Queens Blvd, # 1E\"",
      "zip": "11357"
    },
    {
      "id": "1eb24f6b59bae10c7e8397925093e5ab",
      "name": "Ma Jesusa Christina Calagos",
      "email": "ma_jesusa_christina_calagos_11218@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "450 clarkson Ave",
      "zip": "11218"
    },
    {
      "id": "245f4a5465147df80ed393541e8db974",
      "name": "Ibrahim Carvan",
      "email": "ibrahim_carvan_11209@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "04a93c21ac23a8f68e7556f247f9d9c8",
      "name": "Ruben Cerri",
      "email": "ruben_cerri_10457@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "1561 Westchester Avenue",
      "zip": "10457"
    },
    {
      "id": "015a27184025afbe74ef414f3ac6c82f",
      "name": "Yuderqui Checo",
      "email": "yuderqui_checo_10031@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "128 Fort Washington Ave",
      "zip": "10031"
    },
    {
      "id": "b2d9980912988afce5a081dcbaec792c",
      "name": "Yuderqui Checo",
      "email": "yuderqui_checo_10453@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "375 East Fordham Road",
      "zip": "10453"
    },
    {
      "id": "befccbc511134cb08769bef567f9a707",
      "name": "Helen Cheung",
      "email": "helen_cheung_11205@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "515f183938d16c1ca3445c5b156858c2",
      "name": "Nancy L. Chiang",
      "email": "nancy_l._chiang_11220@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "\"99 Moore Street, 1A\"",
      "zip": "11220"
    },
    {
      "id": "ea40c83b4c6cb15a124e34fda3c31e2a",
      "name": "Jih- Ling Chiang",
      "email": "jih-_ling_chiang_11211@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "5 Avenue I",
      "zip": "11211"
    },
    {
      "id": "45476c94aceb9fb8666570535264e796",
      "name": "Maksudul Chowdhury",
      "email": "maksudul_chowdhury_11355@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "18 Eastwood Blvd",
      "zip": "11355"
    },
    {
      "id": "f6d86db126cb8ac94466d4b6d92d6195",
      "name": "Damaris Collado",
      "email": "damaris_collado_10003@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "155 West 19th St",
      "zip": "10003"
    },
    {
      "id": "8bac7ddaeba5d8d68c0c08ee52b43121",
      "name": "Letha Daniel",
      "email": "letha_daniel_11224@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "520 Neptune avenue",
      "zip": "11224"
    },
    {
      "id": "d13d6d634754bf77955a1c28372752a7",
      "name": "Brena M. Desai",
      "email": "brena_m._desai_10013@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "224e70f2d16347c2d75b919bd6f45c3c",
      "name": "YUMEI DING",
      "email": "yumei_ding_11354@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "37-57 91st Street",
      "zip": "11354"
    },
    {
      "id": "8dcc607a923f7f7ebec53636029c91c3",
      "name": "Mridula Dogra",
      "email": "mridula_dogra_11230@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "585 Knickerbocker Avenue",
      "zip": "11230"
    },
    {
      "id": "95fbd63edf258608f1669ec0f1b7ef77",
      "name": "Jacqueline Dumornay",
      "email": "jacqueline_dumornay_10128@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "247 3rd Ave",
      "zip": "10128"
    },
    {
      "id": "36ce725c7c462015c5bb16eef900decd",
      "name": "Marie-Paule Dupiton",
      "email": "marie-paule_dupiton_10453@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "1931 Williamsbridge Road",
      "zip": "10453"
    },
    {
      "id": "7acfffa1601209cf660bdf588b49cdbc",
      "name": "Olga Echeverria",
      "email": "olga_echeverria_11368@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "29-22 30th Avenue",
      "zip": "11368"
    },
    {
      "id": "092c377ce1840e2e37afd2cf13b8a2c9",
      "name": "Ingrid Felix-Peralta",
      "email": "ingrid_felix-peralta_10032@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "c01f70eb2cc293b0528028ffa267518e",
      "name": "Edgar Flores-Castillo",
      "email": "edgar_flores-castillo_11385@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "870 centaal ave",
      "zip": "11385"
    },
    {
      "id": "b7e75ab96b232c7cf78897c630ef3517",
      "name": "Hector Florimon",
      "email": "hector_florimon_11219@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "\"763 56th Street , 1st floor\"",
      "zip": "11219"
    },
    {
      "id": "539132720a90d060af6b0f09c3a4bce2",
      "name": "Hector Florimon",
      "email": "hector_florimon_10030@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "4718a72b6bcc3d07be0a97ed71476f0c",
      "name": "Costas Frousios",
      "email": "costas_frousios_11355@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "41-61 Kissena Blvd.",
      "zip": "11355"
    },
    {
      "id": "f5a22623c085151d05c29de35389d545",
      "name": "Melissa Furman",
      "email": "melissa_furman_11423@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "\"36-09 Main Street, Suite 8C\"",
      "zip": "11423"
    },
    {
      "id": "97713fda5ab97509edbb77c9cde42d2b",
      "name": "JYOTI GANDHI",
      "email": "jyoti_gandhi_11372@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "40-35 95th Street",
      "zip": "11372"
    },
    {
      "id": "84d47d8f9815abfc28fa9229f507ff53",
      "name": "Florence Golamco",
      "email": "florence_golamco_11206@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "741 New Lots Avenue",
      "zip": "11206"
    },
    {
      "id": "6736f350b5956763803f664b70251f74",
      "name": "Maya Golbraykh",
      "email": "maya_golbraykh_11372@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "11216 Jamaica Ave",
      "zip": "11372"
    },
    {
      "id": "4b98261a71ae3a3e585711627f72f015",
      "name": "Steven J. Goldstein",
      "email": "steven_j._goldstein_11377@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "a2bf179584dc41494101241571b10cb6",
      "name": "Violeta Gomez",
      "email": "violeta_gomez_11373@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "c006cf238de83d4115975a69fbeda3d7",
      "name": "Violeta Gomez",
      "email": "violeta_gomez_11205@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "821 57th Street",
      "zip": "11205"
    },
    {
      "id": "0aee2ddce0b40af3e9e84893e6f9e06f",
      "name": "Jamilah Grant-Guimaraes",
      "email": "jamilah_grant-guimaraes_10453@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "225 east 149th street",
      "zip": "10453"
    },
    {
      "id": "1c8ca7bfc220d2cfed3412f79cbbcd9d",
      "name": "Kimberly Green-Mayer",
      "email": "kimberly_green-mayer_11373@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "b01d7cae171cbeed0903470fe742177b",
      "name": "Giancarlo Guido",
      "email": "giancarlo_guido_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "46b626729e0b6187ef959186153cab17",
      "name": "Indranil Gupta",
      "email": "indranil_gupta_10451@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "3853 WHITE PLAINS RD",
      "zip": "10451"
    },
    {
      "id": "7efbec248f6c59ce99a8ef19b7d88dbe",
      "name": "Sameera Haroon",
      "email": "sameera_haroon_10457@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "1250 Shakespeare Avenue",
      "zip": "10457"
    },
    {
      "id": "09e5a3b53c123ccd40997df106394953",
      "name": "Lynn A. Hawkins",
      "email": "lynn_a._hawkins_11374@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "\"136-17 39th Avenue, Flushing NY, 11354, Suite CFC, 4th Floor\"",
      "zip": "11374"
    },
    {
      "id": "dd88e64078562e212d960bdc435b4206",
      "name": "Patricia Herko",
      "email": "patricia_herko_10032@gmail.com",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "9a87347993c602e2b7b8f236a42788c7",
      "name": "Howard Hinestroza",
      "email": "howard_hinestroza_10469@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "1163 Manor Avenue",
      "zip": "10469"
    },
    {
      "id": "02fe743c6a80fe05b7f9f17be739221c",
      "name": "Lori R. Hoch",
      "email": "lori_r._hoch_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "108 E 96th St",
      "zip": "10021"
    },
    {
      "id": "774df49ce000e01cf936be8d64f9e9f6",
      "name": "Hector Holson",
      "email": "hector_holson_11219@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "231 South 3rd Street",
      "zip": "11219"
    },
    {
      "id": "3ec9465dd30a285608f06acd6aaccad8",
      "name": "Hector Holson",
      "email": "hector_holson_10016@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "140 Wadsworth Avenue",
      "zip": "10016"
    },
    {
      "id": "f22d030e688e18187a8c80dfb14bb401",
      "name": "Hector Holson",
      "email": "hector_holson_11211@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "\"1 Hanson pl, Ste. 708\"",
      "zip": "11211"
    },
    {
      "id": "fb6ccf03232e2565e551d6fc36eb3583",
      "name": "David Hurwitz",
      "email": "david_hurwitz_11203@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "42e01ed33f6cc190013f7bf892333b8b",
      "name": "Khutoretsky Igor",
      "email": "khutoretsky_igor_10028@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "\"139 centre street, #505\"",
      "zip": "10028"
    },
    {
      "id": "65ca56d6cd1b734e5b64121846d5e86b",
      "name": "Fawzia Kazmi",
      "email": "fawzia_kazmi_10019@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "40 Montgomery Street",
      "zip": "10019"
    },
    {
      "id": "e73212e7d6c4eb5e7d99130ae2607cb1",
      "name": "Rafik Khaimov",
      "email": "rafik_khaimov_11204@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "\"34 PLAZA STREET, SUITE104\"",
      "zip": "11204"
    },
    {
      "id": "0db9026087a50c1f631bbd4199142127",
      "name": "Wilfredo Lao",
      "email": "wilfredo_lao_11213@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "1407 46th Street",
      "zip": "11213"
    },
    {
      "id": "6c35341b898caabd2090775dfea28329",
      "name": "Alice Lau",
      "email": "alice_lau_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "212 E 70th st",
      "zip": "10013"
    },
    {
      "id": "197fc5b31e601ec59340775b65fa85ec",
      "name": "Tatyana Ledovsky",
      "email": "tatyana_ledovsky_11432@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "-3728 77th St",
      "zip": "11432"
    },
    {
      "id": "b48714164f7a38a3258734ad9dc60ee2",
      "name": "Jack Levine",
      "email": "jack_levine_10107@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "581 W 161 STREET",
      "zip": "10107"
    },
    {
      "id": "d83f2d381d9a9ff1f3e4e3d68689826d",
      "name": "CARLA LUCACEL",
      "email": "carla_lucacel_11354@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "\"133-47 Sanford Avenue, Suite 1H\"",
      "zip": "11354"
    },
    {
      "id": "ae60dce739f409e04e642f5e2a2e6bc0",
      "name": "Salamat Majeed",
      "email": "salamat_majeed_10453@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "7021bd3e9429f21677afdaae3fee5622",
      "name": "Fabio Mehrgut",
      "email": "fabio_mehrgut_10458@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "\"1650 Selwyn Ave, 6th Floor\"",
      "zip": "10458"
    },
    {
      "id": "57a93e31dd54a5e6d75684c7aeac3ab1",
      "name": "Jose Mendez",
      "email": "jose_mendez_11435@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "234-32 Merrick Blvd.",
      "zip": "11435"
    },
    {
      "id": "a9d4294fe09f4db6352f09b5405a9d0e",
      "name": "Iwona Mienko",
      "email": "iwona_mienko_11204@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "796 Drew Street",
      "zip": "11204"
    },
    {
      "id": "202ae7a385cc2ee57a6ca9bfd0fb1636",
      "name": "Magdy Mohammed",
      "email": "magdy_mohammed_11238@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "1446 Broadway Avenue",
      "zip": "11238"
    },
    {
      "id": "59957d3890f3941af55dae46e5231c25",
      "name": "Nahar Most",
      "email": "nahar_most_11372@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "1801d0899e7d98574199dcab79d1d861",
      "name": "Howard Naas",
      "email": "howard_naas_10033@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "185 Canal Street",
      "zip": "10033"
    },
    {
      "id": "da6dda8a05030b04ae44f160a33a0871",
      "name": "Sudhanshu Narendra",
      "email": "sudhanshu_narendra_11230@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "1324 BERGEN STREET",
      "zip": "11230"
    },
    {
      "id": "8813f87c11c88b16f3ec059d3c7987ba",
      "name": "Habib Nazarian",
      "email": "habib_nazarian_10312@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "4335 Hylan Blvd",
      "zip": "10312"
    },
    {
      "id": "06eeaf41021694bee1a52e077c60d50b",
      "name": "Lyudmila Oslon",
      "email": "lyudmila_oslon_10451@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "860 GRAND CONCOURSE",
      "zip": "10451"
    },
    {
      "id": "e32a8b4bca338f0f2768f548c5193026",
      "name": "Jose Ovalle",
      "email": "jose_ovalle_10013@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "1641 3rd Ave suite 27H",
      "zip": "10013"
    },
    {
      "id": "0ded6d50313125dd43ae68df7ad08af3",
      "name": "Shivani Paliwal",
      "email": "shivani_paliwal_10455@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "1610 WILLIAMSBRIDGE RD",
      "zip": "10455"
    },
    {
      "id": "8789f7eb9561bcd28cc998bc0d17aaf9",
      "name": "O'Neall E. Parris",
      "email": "o'neall_e._parris_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "8d3105e03fb0a140435620c70bdd38eb",
      "name": "Mario Peichev",
      "email": "mario_peichev_11419@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "1236 FULTON STREET",
      "zip": "11419"
    },
    {
      "id": "311d24b9801e990fb19920733b2c0b56",
      "name": "Victor Peralta",
      "email": "victor_peralta_11373@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "f76ffcb3a7dcb08f27873a5c05545e3f",
      "name": "Victor Peralta",
      "email": "victor_peralta_11233@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "1125 Fulton Street",
      "zip": "11233"
    },
    {
      "id": "4941a868c46f05fcc51fbc38eef304cf",
      "name": "Annette Perea",
      "email": "annette_perea_10463@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "d58f0be22f49bd12a95ce87ba1d6ded6",
      "name": "Caesar Preposi",
      "email": "caesar_preposi_11205@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "ef1898b655d0ba5724f67bd7726236f0",
      "name": "Aisha Prim",
      "email": "aisha_prim_10034@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "501 Main Street",
      "zip": "10034"
    },
    {
      "id": "6262fd2cdd4f556a1144517591b31a2c",
      "name": "Sergey Prokhorov",
      "email": "sergey_prokhorov_11420@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "89-18 134 street",
      "zip": "11420"
    },
    {
      "id": "3445e1163e9c3f0ba3972a07590faa25",
      "name": "Svetlana Prokhorova",
      "email": "svetlana_prokhorova_10030@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "afb40e5f4259133ac53b3f42b348796e",
      "name": "Naginder Puri",
      "email": "naginder_puri_10031@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "2311 Adam Clayton Powell Jr.Boulevard",
      "zip": "10031"
    },
    {
      "id": "388ba7535f23567183f4bc42b316c98d",
      "name": "YAO QIKAI",
      "email": "yao_qikai_10453@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "1973 University Avenue",
      "zip": "10453"
    },
    {
      "id": "6016a7ccbc0bb3efea4d76805cd1e4e0",
      "name": "Jose Quiwa",
      "email": "jose_quiwa_11212@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "3016 Glenwood Rd",
      "zip": "11212"
    },
    {
      "id": "a47bebe6898db038e1097e9a97e09516",
      "name": "MOHYUDDIN QURESHI",
      "email": "mohyuddin_qureshi_10457@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "9f28d03032d3b46b81831dd126d2e9a4",
      "name": "Maria Qyezada",
      "email": "maria_qyezada_11354@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "41-60 Main St. #205B",
      "zip": "11354"
    },
    {
      "id": "26de9c84c2b3f82a2e154c7155d1cf9b",
      "name": "Elsa Sofia Reynoso",
      "email": "elsa_sofia_reynoso_11220@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "cc62b689b3ed3928d40cd33d31d91444",
      "name": "Carmina Rivera",
      "email": "carmina_rivera_10024@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "155 W. 19th St",
      "zip": "10024"
    },
    {
      "id": "1c0546a59e9e82a93eb4824495eef7dd",
      "name": "Carmina Rivera",
      "email": "carmina_rivera_10458@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "1715 University Blvd",
      "zip": "10458"
    },
    {
      "id": "469f9e8ba55175bc84fffabe9f0d9cb5",
      "name": "Marie-Lourdes Roche",
      "email": "marie-lourdes_roche_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "fbfb78149a92aeeba3899aeec59a171b",
      "name": "Gonzalo Sabogal",
      "email": "gonzalo_sabogal_10018@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "360 1st Avenue Apartment MG",
      "zip": "10018"
    },
    {
      "id": "b3039b9a864f71a8247fd9f6dca4ae99",
      "name": "Mario Saint-Laurent",
      "email": "mario_saint-laurent_11213@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "dd5b5deb83430dab32412255e90c6bcd",
      "name": "Mario Saint-Laurent",
      "email": "mario_saint-laurent_10028@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "42 Broadway Ave",
      "zip": "10028"
    },
    {
      "id": "683a456d99ed36e7c71362d054e9fdf4",
      "name": "Franklyn Sencion",
      "email": "franklyn_sencion_10452@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "1560 GRAND CONCOURSE",
      "zip": "10452"
    },
    {
      "id": "de9771fdbbe847bc1fd5613025a92e2f",
      "name": "Franklyn Sencion",
      "email": "franklyn_sencion_10031@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "\"41 Mott Street, Chinatown\"",
      "zip": "10031"
    },
    {
      "id": "9c4b8af92089c090edf4d82c6423b5b5",
      "name": "Franklin Sencion",
      "email": "franklin_sencion_11355@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "\"109-33 71 Road, Suite 1B\"",
      "zip": "11355"
    },
    {
      "id": "af83168f0ea34e4b34162d4e5404bcce",
      "name": "Jose Serruya",
      "email": "jose_serruya_11211@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "37b63e93e21e84a9d10a76cfdea177e2",
      "name": "Yelena Shedina",
      "email": "yelena_shedina_10453@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "1216 Beach Ave #1",
      "zip": "10453"
    },
    {
      "id": "ed07763c9a94f357bbcb93f4f6e603e3",
      "name": "San Shih",
      "email": "san_shih_11211@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "48f4defbae708cf7b48fb071792a5f69",
      "name": "Hari Krishna Shukla",
      "email": "hari_krishna_shukla_10040@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "201 E. 65th ST",
      "zip": "10040"
    },
    {
      "id": "781f11187691ae9b23899f82262cea35",
      "name": "Daljeet Singh",
      "email": "daljeet_singh_10458@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "2869 Grand Concourse Avenue Ste. 1",
      "zip": "10458"
    },
    {
      "id": "54f68150d1e826cdc631fd24d5f2733c",
      "name": "Lyudmila Sorekin",
      "email": "lyudmila_sorekin_10024@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "\"99 University Place, 3Rd floor\"",
      "zip": "10024"
    },
    {
      "id": "33b960867c16962f28a89cee5780c90e",
      "name": "Lyudmila Sorkin",
      "email": "lyudmila_sorkin_11105@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "38-39 Bell Blvd #233",
      "zip": "11105"
    },
    {
      "id": "72e51df88434f22d1f91f6f546e701dc",
      "name": "Betty E. Stewart",
      "email": "betty_e._stewart_10012@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "160 E 72nd",
      "zip": "10012"
    },
    {
      "id": "ae9a2b2d77ac177a52517c4d4a1952c8",
      "name": "Arkadiy Takhalov",
      "email": "arkadiy_takhalov_10013@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "68 Bayard Street",
      "zip": "10013"
    },
    {
      "id": "be0b5f675693360de817fa2f1086e5e7",
      "name": "Alberto Tan",
      "email": "alberto_tan_11372@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "5e0f467daf30485177cf16278ef052e3",
      "name": "Wenjing Tao",
      "email": "wenjing_tao_11355@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "41-60 Main Street",
      "zip": "11355"
    },
    {
      "id": "10a9c51ec4e357a369e863e2b189564d",
      "name": "Rohini Thodge",
      "email": "rohini_thodge_11373@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "69-11B Roosevelt Ave.",
      "zip": "11373"
    },
    {
      "id": "3410367f404ba62c709a2a7593c8e849",
      "name": "Rohini Thodge",
      "email": "rohini_thodge_10003@gmail.com",
      "specilization": "general practitioner",
      "borough": "Flushing",
      "address": "155 West 19th St",
      "zip": "10003"
    },
    {
      "id": "d7314471a61c014bc29aa223ec8955e7",
      "name": "Man Yee Tong",
      "email": "man_yee_tong_10458@gmail.com",
      "specilization": "infectiologist",
      "borough": "Manhattan",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "aeb72d2737a125594114f3d3c23209c7",
      "name": "Jean Carlos Torres",
      "email": "jean_carlos_torres_11209@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "1509 Rockaway Parkway",
      "zip": "11209"
    },
    {
      "id": "6dc3f7ae62f29cfe6b2a6bc678b20bc1",
      "name": "Dionicio Trejo",
      "email": "dionicio_trejo_11216@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "1121 coney island ave",
      "zip": "11216"
    },
    {
      "id": "ec6ba1049feac35b5e1ca51bbd19f131",
      "name": "Selman Leticia Vargas",
      "email": "selman_leticia_vargas_10013@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "\"629 W 185th St, 2nd Floor\"",
      "zip": "10013"
    },
    {
      "id": "b9803890359242ccd22ca35232857a54",
      "name": "Coralys Vega",
      "email": "coralys_vega_11435@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "136-20 38th Ave. #7G",
      "zip": "11435"
    },
    {
      "id": "d614c00b94ce7b6704c0a8fefa912095",
      "name": "Rita P. Verna",
      "email": "rita_p._verna_11375@gmail.com",
      "specilization": "infectiologist",
      "borough": "Manhattan",
      "address": "246-03 81st Ave.",
      "zip": "11375"
    },
    {
      "id": "262f85569cbd18e998f670d48fe0e823",
      "name": "Sudha Vijaykumar",
      "email": "sudha_vijaykumar_10033@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "650 First Ave - 7th F",
      "zip": "10033"
    },
    {
      "id": "b1a85df95baeaf4d8a28e1a725313e41",
      "name": "Caesar Villarica",
      "email": "caesar_villarica_10011@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "bdef99380febe1db4881ab464da598c5",
      "name": "Emilio Villegas",
      "email": "emilio_villegas_11237@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "2233 Nostrand Avenue",
      "zip": "11237"
    },
    {
      "id": "6620463311a1276960cfc65f674f12ca",
      "name": "Emilio Villegas",
      "email": "emilio_villegas_11221@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "222 Hancock St",
      "zip": "11221"
    },
    {
      "id": "b27704f60cda024f479f574b91be49cd",
      "name": "Emilio Villegas",
      "email": "emilio_villegas_11692@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "13710 FRANKLIN AVE",
      "zip": "11692"
    },
    {
      "id": "e66d9b26d97cce1e83596a3ceb525dde",
      "name": "JI-QING WEI",
      "email": "ji-qing_wei_11354@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "357c7f2d11907102a774971cfd23d4a2",
      "name": "Alejandra Wilson",
      "email": "alejandra_wilson_11042@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "4039 Junction Blvd",
      "zip": "11042"
    },
    {
      "id": "9a0a740a332cd3f134d46adaf40ae295",
      "name": "Robert Yu",
      "email": "robert_yu_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "375 East Fordham Road",
      "zip": "10453"
    },
    {
      "id": "017b46d28fd345bd81bfe581f9807db0",
      "name": "AnnMarie Yu",
      "email": "annmarie_yu_10023@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "\"807 St. Nicholas Avenue, Apt A8\"",
      "zip": "10023"
    },
    {
      "id": "cea26a9c4e4baae1e5854dd5b292f0a3",
      "name": "Nurun N. Yusuf",
      "email": "nurun_n._yusuf_10028@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "42 Broadway Ave",
      "zip": "10028"
    },
    {
      "id": "916eae313e48a728a2908fed69ffda95",
      "name": "Fazlul Yusuf",
      "email": "fazlul_yusuf_10032@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "c9b99c3fb8d15bad61a3e8dfa302b741",
      "name": "Ella Zavolunova",
      "email": "ella_zavolunova_11204@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "124 East 43rd Street",
      "zip": "11204"
    },
    {
      "id": "7320e20d64c5f0561e5a698b7339b4f0",
      "name": "Ling Ling Zeng",
      "email": "ling_ling_zeng_11368@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "4053 75th Street",
      "zip": "11368"
    },
    {
      "id": "2be6a30dd6aa6c9200d6e785b4bfd287",
      "name": "Katherine Zeng",
      "email": "katherine_zeng_11213@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "1407 46th Street",
      "zip": "11213"
    },
    {
      "id": "39cf903143ecdeff62559d7e04f988e2",
      "name": "Anna Zhivotovsky",
      "email": "anna_zhivotovsky_11374@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "87-08 Justice Ave",
      "zip": "11374"
    },
    {
      "id": "e4838cf7f4e5f2da47da63ca0bbcf6df",
      "name": "Wenjing Zhou",
      "email": "wenjing_zhou_10030@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "837a23f01809d0df1a2971c07788a9e1",
      "name": "Olga Zilberstein",
      "email": "olga_zilberstein_11215@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "133-A West End Avenue",
      "zip": "11215"
    },
    {
      "id": "fd4f4384499ee0e34b96d7f73785d339",
      "name": "Saroj Gupta",
      "email": "saroj_gupta_10021@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "465af42ea0a27a3c3bef907cc9b05aa1",
      "name": "Keyan Ma",
      "email": "keyan_ma_10033@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "14 East 4th Street",
      "zip": "10033"
    },
    {
      "id": "ca3fb6eec9b8ad8302700ec42cee9f56",
      "name": "Collier Chan",
      "email": "collier_chan_10453@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "f434d7e2b001c252f72a1adc61e3d3e8",
      "name": "Nemaan Ghuman",
      "email": "nemaan_ghuman_11236@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "2742 brighton 8th street",
      "zip": "11236"
    },
    {
      "id": "39df6cd01be323639d25144d9cc7c0ae",
      "name": "Arthur Kaplan",
      "email": "arthur_kaplan_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "6125dad2c0c1ccd42e5f8c062b9efc33",
      "name": "Joseph Roosevelt Clerisme",
      "email": "joseph_roosevelt_clerisme_11226@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "372 Kingston Avenue",
      "zip": "11226"
    },
    {
      "id": "74c000b4a7c101a2ef5fb28379c5bf4e",
      "name": "Fermin P. Gonzalez",
      "email": "fermin_p._gonzalez_10312@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "440c2b132b7b53403d183ebe0fa287b7",
      "name": "Dalia Olivier",
      "email": "dalia_olivier_10013@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "20 Park Avenue",
      "zip": "10013"
    },
    {
      "id": "cf83bbb8c2e0afc797ef07d4341fe38f",
      "name": "Hla Tun",
      "email": "hla_tun_11372@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "\"162-16 Union Turnpike, Suite 305\"",
      "zip": "11372"
    },
    {
      "id": "d69ba85eaffc8a35afcf96d10b799957",
      "name": "Eneida Agosto",
      "email": "eneida_agosto_11237@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "fe70f5d87f021e8f940214e7aece9487",
      "name": "Jack Bruder",
      "email": "jack_bruder_11103@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "110-16 Sutphin Ave",
      "zip": "11103"
    },
    {
      "id": "222ab6089e683c795f1575f05f50fceb",
      "name": "Andrew Bohmart",
      "email": "andrew_bohmart_10034@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "501 Main Street",
      "zip": "10034"
    },
    {
      "id": "000206f588aafa34a43fdf85b70b8c16",
      "name": "Shu Yain Chin",
      "email": "shu_yain_chin_11432@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "75-17 41ST AVE",
      "zip": "11432"
    },
    {
      "id": "ab34d339c75ae6ab533c4754fd4cd2dd",
      "name": "Tina Dobsevage",
      "email": "tina_dobsevage_11372@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "83-10 Queens Blvd",
      "zip": "11372"
    },
    {
      "id": "f416d3e1ff732382befb144aba4d8371",
      "name": "Daniel Despen",
      "email": "daniel_despen_10467@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "68d2142d9d179edbf7b50a6a8ac46c27",
      "name": "Dyan Hes",
      "email": "dyan_hes_11355@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "e8fb4bfb7eb6b2d6b471464c9f1e5aa4",
      "name": "David Winter",
      "email": "david_winter_10453@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "d98bc68e3718e086709056bc29e2f309",
      "name": "James Blake",
      "email": "james_blake_11372@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "a43156c3ae7364d44b013f4b487f9fdf",
      "name": "Alain Fedida",
      "email": "alain_fedida_11205@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "79496dfdffa7036b0b4e8dd20c7036d0",
      "name": "Eliscer Guzman",
      "email": "eliscer_guzman_10034@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "501 Main Street",
      "zip": "10034"
    },
    {
      "id": "18837cc1956f1d9f0f487612906b6fb9",
      "name": "Dan Krauser",
      "email": "dan_krauser_11356@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "209-22 Hillside Avenue",
      "zip": "11356"
    },
    {
      "id": "2ffcb590b207cf8a2154f32e2937d903",
      "name": "Robert Meltzer",
      "email": "robert_meltzer_10463@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "1f656d33fc35a38c4215d03be6610fba",
      "name": "Kenneth Tam",
      "email": "kenneth_tam_11432@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "40-08 Forley Street",
      "zip": "11432"
    },
    {
      "id": "321f668956b40e33bdbae5288239240c",
      "name": "Alice Riegel",
      "email": "alice_riegel_11207@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "-9613 Flatlands Avenue",
      "zip": "11207"
    },
    {
      "id": "11ae941883a2a1f7b5c06176f944ac66",
      "name": "Michael Eidelman",
      "email": "michael_eidelman_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "75-06 ELIOT AVE",
      "zip": "11355"
    },
    {
      "id": "035beb6a2d027bec1b5fa6e7734287f9",
      "name": "Gretchen Throner",
      "email": "gretchen_throner_10030@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "9934f532612cffa0432a3e2046485951",
      "name": "Harry Gruenspan",
      "email": "harry_gruenspan_11203@gmail.com",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "1236 Fulton Street",
      "zip": "11203"
    },
    {
      "id": "8649bdc6733ad52ad6a3ebca89d5e5ed",
      "name": "Gillian Katz",
      "email": "gillian_katz_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "d5d22ec34179a78b08acacc467b5332c",
      "name": "Ricardo Pou",
      "email": "ricardo_pou_10454@gmail.com",
      "specilization": "urologist",
      "borough": "Brooklyn",
      "address": "\"2426 Eastchester Rd, Suite 201\"",
      "zip": "10454"
    },
    {
      "id": "3ba3eec72be9176a61bd4293ab303117",
      "name": "Lohrasb Ahmadian",
      "email": "lohrasb_ahmadian_11203@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "8309499e1219a9a7048716e96ba9f88c",
      "name": "JUAN ALBA",
      "email": "juan_alba_11372@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "13347 Sanford Ave",
      "zip": "11372"
    },
    {
      "id": "a6d60bb7275b9287d6c3dda99a7b1aea",
      "name": "Monique Apollon",
      "email": "monique_apollon_11203@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "8df8e8c7034c91e70fc2b5f0ea4333fb",
      "name": "Maggie Bertisch",
      "email": "maggie_bertisch_10030@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "c9de3e2a33916d059324dbdfb025494f",
      "name": "Luis Blanco",
      "email": "luis_blanco_11237@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "6b23380486143ae11b1adfd297f5a13c",
      "name": "Nathaniel Brownlow",
      "email": "nathaniel_brownlow_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "133-04 41st Ave",
      "zip": "11354"
    },
    {
      "id": "fc726a3ca25c7c42cb8904a942c6a90e",
      "name": "Leonid Bukhman",
      "email": "leonid_bukhman_10034@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "707 West 171st Suite A",
      "zip": "10034"
    },
    {
      "id": "118e47ffca32e308114d891b96fc76cf",
      "name": "Juan Chabla",
      "email": "juan_chabla_10312@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "21ed29f39b12027968205fb5498920f1",
      "name": "Teresa Chan",
      "email": "teresa_chan_10022@gmail.com",
      "specilization": "gynecologist",
      "borough": "New York",
      "address": "158 East 84th St",
      "zip": "10022"
    },
    {
      "id": "0e6eae0391b1e0d40e46d15f5425c6a2",
      "name": "Kevin Charlotten",
      "email": "kevin_charlotten_11219@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "416 37 St",
      "zip": "11219"
    },
    {
      "id": "5dff4a4620da36f3fea12c04da50c868",
      "name": "Bruce Chung",
      "email": "bruce_chung_11212@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "6414 Bay Park Way",
      "zip": "11212"
    },
    {
      "id": "9e10cf6d84363e2bbd1452939420c023",
      "name": "Todd Cowdery",
      "email": "todd_cowdery_11042@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "4039 Junction Blvd",
      "zip": "11042"
    },
    {
      "id": "29696310976362904e565e7a58ee1c92",
      "name": "Liana Dao",
      "email": "liana_dao_10021@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "8fa54e83756a46cffca456da2b8d8aa5",
      "name": "Aran Degenhardt",
      "email": "aran_degenhardt_10013@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "6e2e4415a78cbaca8a5c6ecbac50f056",
      "name": "Demetra Eleftheriou",
      "email": "demetra_eleftheriou_11211@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "85caa8f6d12e89426971672e147ccae8",
      "name": "Vincent Esposito",
      "email": "vincent_esposito_11375@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "86-02 MUSKET STREET",
      "zip": "11375"
    },
    {
      "id": "bf1b29212fc54bb4dc2c25ac8a8fded5",
      "name": "Manuel R. Esteban-Galindo",
      "email": "manuel_r._esteban-galindo_11692@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "37-47 77 Street",
      "zip": "11692"
    },
    {
      "id": "fd3b6c37c491c7319fbc61a277d7421b",
      "name": "Nick Gianoukakis",
      "email": "nick_gianoukakis_11238@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Bronx",
      "address": "5722 7th ave",
      "zip": "11238"
    },
    {
      "id": "bc496acdfe555c76ea76cd3506b6abff",
      "name": "Sandra Gilban",
      "email": "sandra_gilban_10472@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "305 e 149th st",
      "zip": "10472"
    },
    {
      "id": "2681ad9f87c1d95cce7cc0018a646199",
      "name": "Jeffrey Goldstein",
      "email": "jeffrey_goldstein_11418@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "711 Cedar Lawn",
      "zip": "11418"
    },
    {
      "id": "52f0fce6a78ca97a8e6320968a528a6e",
      "name": "Jose Goris",
      "email": "jose_goris_10453@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "769 Concourse Vlg W",
      "zip": "10453"
    },
    {
      "id": "c640545bc04837b3a5e2fdfcb6d83f73",
      "name": "Lilia Gorodinsky",
      "email": "lilia_gorodinsky_11373@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "3747-77th St",
      "zip": "11373"
    },
    {
      "id": "29b0242d8bf4533132fea1c37646314a",
      "name": "Keith Greenberg",
      "email": "keith_greenberg_11418@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "83-45 Dongan Ave",
      "zip": "11418"
    },
    {
      "id": "589460b12a1acf534400a2897fe66d73",
      "name": "Gunther Groning",
      "email": "gunther_groning_11375@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "6506 Roosevelt Ave",
      "zip": "11375"
    },
    {
      "id": "34825ad51bb108c17226ee09ecbd484b",
      "name": "Scott Hartman",
      "email": "scott_hartman_11230@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "178 EAST 85TH STREET 4TH FLOOR",
      "zip": "11230"
    },
    {
      "id": "fea4b842cf12960567a0e13a44c90027",
      "name": "Mark Horowitz",
      "email": "mark_horowitz_10010@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "67a25184d00ce600fa4432c247357abb",
      "name": "Syed Hussaini",
      "email": "syed_hussaini_11219@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "\"763 56th Street, 1st floor\"",
      "zip": "11219"
    },
    {
      "id": "dc89b1776cad66906da73628b2ea03b1",
      "name": "Dana Jacobs",
      "email": "dana_jacobs_10033@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "39 E Broadway Suite 606",
      "zip": "10033"
    },
    {
      "id": "428cc34d81f3ef76ace903836939b516",
      "name": "MARGARET KEARNS-STANLEY",
      "email": "margaret_kearns-stanley_10021@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "d9921a51a87849f5eca60847a5e6bd62",
      "name": "Margaret Kearns-Stanley",
      "email": "margaret_kearns-stanley_10003@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "\"48 Market St., Suite B\"",
      "zip": "10003"
    },
    {
      "id": "27941c1cf47c4418a618fc8bb139a54a",
      "name": "Alexander Krishtul",
      "email": "alexander_krishtul_10013@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "e2c505886fb4e76d9194ae57ceb4ace9",
      "name": "Cluny Lefevre",
      "email": "cluny_lefevre_10065@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "\"86 Bowery Street, 6F\"",
      "zip": "10065"
    },
    {
      "id": "2cb049d392706988d09fe326f0a363c4",
      "name": "Patricia Leone",
      "email": "patricia_leone_10012@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "245 East 35th Street",
      "zip": "10012"
    },
    {
      "id": "8f967700de5015eecb25c4f31e3e5f74",
      "name": "Albert Levy",
      "email": "albert_levy_11361@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "83-06 Queens Blvd",
      "zip": "11361"
    },
    {
      "id": "97cb87261da8edf0a5088e163a1ed56b",
      "name": "Dina Louie",
      "email": "dina_louie_10013@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "84259f9785c9420bab1576a43c8a8942",
      "name": "Pamela Mahmud",
      "email": "pamela_mahmud_10467@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "e16f914b670dd8cf91cd1b45b812829d",
      "name": "Arthur Maisto",
      "email": "arthur_maisto_10002@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "345 E37th Street Ste 303C",
      "zip": "10002"
    },
    {
      "id": "c670bc34d97882cfb360f3e2f4922216",
      "name": "Arthur Manning",
      "email": "arthur_manning_10010@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "160 East 32nd St",
      "zip": "10010"
    },
    {
      "id": "eca81862e849b4243061de3f95d878f9",
      "name": "Judy Marren",
      "email": "judy_marren_11373@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "\"136-21 Roosevelt Ave, Suite #205\"",
      "zip": "11373"
    },
    {
      "id": "acccc898c487265d3d66bcd4bb23f60b",
      "name": "Luis E. Moquete",
      "email": "luis_e._moquete_11235@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "529 NOSTRAND AVE",
      "zip": "11235"
    },
    {
      "id": "7f7071ebf73efbd0bbef508804be978e",
      "name": "Christel Moran",
      "email": "christel_moran_10031@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "1150 Park Avenue",
      "zip": "10031"
    },
    {
      "id": "2060da960cabd0f613759303f42ff540",
      "name": "Mary Noecker",
      "email": "mary_noecker_10305@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "2efdea4ca2f269dd749f2986c0bd0fe6",
      "name": "Kennedy Omonuwa",
      "email": "kennedy_omonuwa_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "3965 Sedgewick Ave",
      "zip": "10453"
    },
    {
      "id": "787c35e4fed867c8e90a64235ab98b54",
      "name": "Mikhail Paikin",
      "email": "mikhail_paikin_11366@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "219-02 Linden Blvd",
      "zip": "11366"
    },
    {
      "id": "247ea014a34e98a8ad82ea34019f1da7",
      "name": "Federico Pichardo",
      "email": "federico_pichardo_10312@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "88e2ee07c3ce14c157def01741c4b482",
      "name": "Florentino Reyes",
      "email": "florentino_reyes_10028@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "\"221 Canal Street, Suite#302\"",
      "zip": "10028"
    },
    {
      "id": "00635719adc5fe5b0e139b4837e96296",
      "name": "Nicolas Rossetti",
      "email": "nicolas_rossetti_10467@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "c8a78ecd4dbdfd54bf43c58ed636f2bc",
      "name": "Gabriel Sagles",
      "email": "gabriel_sagles_11206@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "81 IRVING PLACE",
      "zip": "11206"
    },
    {
      "id": "613a2b22818347173f05b4cc10d4188c",
      "name": "Marlene Saint-Hilaire",
      "email": "marlene_saint-hilaire_10027@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "314 W. 14th Street",
      "zip": "10027"
    },
    {
      "id": "15130b50fbd34b00bac6b4a878b07e36",
      "name": "Anna Saporito",
      "email": "anna_saporito_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "2 West 86th Street Suite 4",
      "zip": "10013"
    },
    {
      "id": "5ad837c25ba5959b95d7101c0bb6da29",
      "name": "Moses Shalit",
      "email": "moses_shalit_11237@gmail.com",
      "specilization": "urologist",
      "borough": "Brooklyn",
      "address": "86 East 49th Street",
      "zip": "11237"
    },
    {
      "id": "1c4dbe19abc39984aefa031221dea503",
      "name": "Richard Shepard",
      "email": "richard_shepard_11372@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "57-18 Woodside Avenue",
      "zip": "11372"
    },
    {
      "id": "9ee386abd3386d237501fb9008779b65",
      "name": "Raisa Slootsky",
      "email": "raisa_slootsky_10028@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "160 East 32nd Street #102",
      "zip": "10028"
    },
    {
      "id": "4a39967bd9b5bb7e70626bb29938a832",
      "name": "Rahul Solanki",
      "email": "rahul_solanki_11373@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "\"41-50 78th St., Ground Fl.\"",
      "zip": "11373"
    },
    {
      "id": "f41b8555480918f79d6632753653595b",
      "name": "Clifford Stark",
      "email": "clifford_stark_11358@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "209 Beach125 ST",
      "zip": "11358"
    },
    {
      "id": "eb5632e8cb041aca1a0a392141360b0f",
      "name": "Tuyen Trinh",
      "email": "tuyen_trinh_10458@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "\"1417 Wythe Place, 1st Floor\"",
      "zip": "10458"
    },
    {
      "id": "d065f28f9a77394948690e6fa5da7b4f",
      "name": "Yolanda Tun-Chiong",
      "email": "yolanda_tun-chiong_10309@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "\"420 Lyndale Avenue,\"",
      "zip": "10309"
    },
    {
      "id": "fe19eebe154d7293dd34e75d2caf28e4",
      "name": "Barry Weinberg",
      "email": "barry_weinberg_11217@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "2083 East 65 Street",
      "zip": "11217"
    },
    {
      "id": "df7ef0ddae7ed72394e16405b101d2aa",
      "name": "Jennifer Figueroa",
      "email": "jennifer_figueroa_11218@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "596 Pennsylvania Avenue",
      "zip": "11218"
    },
    {
      "id": "43d3312a904694cbf2ae26b2e3d267d9",
      "name": "Florence Pua",
      "email": "florence_pua_11354@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "41-60 Main Street #217",
      "zip": "11354"
    },
    {
      "id": "a039908ce9d3aab4d5964ad98986f9e1",
      "name": "Dalsia Acosta",
      "email": "dalsia_acosta_11372@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "40-35 95th Street",
      "zip": "11372"
    },
    {
      "id": "7796f9f03d9535a3cd45f7065892b88b",
      "name": "Karen Adamson",
      "email": "karen_adamson_10453@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "1280 Givan Avenue",
      "zip": "10453"
    },
    {
      "id": "d8777f008100e240c309ba53bb6cfbd9",
      "name": "Adegboyega T. Adebayo",
      "email": "adegboyega_t._adebayo_10456@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "\"1001 Grand Concourse, #13\"",
      "zip": "10456"
    },
    {
      "id": "452f3a98581800301781a7b8ce66ab2e",
      "name": "Mitchell Adler",
      "email": "mitchell_adler_10028@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "2 Mott Street Suite 304",
      "zip": "10028"
    },
    {
      "id": "4a2ca12e7878478f4e01b8aeffd011fd",
      "name": "Bisher Akil",
      "email": "bisher_akil_11201@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "520 Neptune Avenue",
      "zip": "11201"
    },
    {
      "id": "6c7a5a55fcd474885e47624528eeec11",
      "name": "Richard Altman",
      "email": "richard_altman_10458@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "2386 Jerome Avenue",
      "zip": "10458"
    },
    {
      "id": "97c86ffce45958a72d2c7d6019d13aec",
      "name": "Elaine Alvarez",
      "email": "elaine_alvarez_10021@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "6421bd021f3c934530ea8fa2b6a17c7d",
      "name": "Alison Amsterdam",
      "email": "alison_amsterdam_11236@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "bc277261e031ff4ba996d0df96ac1bcd",
      "name": "Yasmine Arasta",
      "email": "yasmine_arasta_11237@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "3d976f1a13db04e8acbefbd82027392a",
      "name": "Elliot J Arons",
      "email": "elliot_j_arons_10030@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "67cc136a447d1220b5b70c27d636bf5f",
      "name": "Frederick Ast",
      "email": "frederick_ast_10304@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "-305 Seguine Avenue",
      "zip": "10304"
    },
    {
      "id": "ea794d7d42875a89b92cec271f32a064",
      "name": "Luis Astudillo",
      "email": "luis_astudillo_11203@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "bbf8a85c4d515966f9d13c209a627ab0",
      "name": "Raji Ayinla",
      "email": "raji_ayinla_11377@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "3c8b0d012b34bd7e7c0fccccf4f49b92",
      "name": "Frank Babb",
      "email": "frank_babb_10467@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "1cd035a73f1b0af6b3f9d891d2c31564",
      "name": "Norayr Baboumian MD",
      "email": "norayr_baboumian_md_11221@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "161 St. NIcholas Avenue",
      "zip": "11221"
    },
    {
      "id": "016de26931f56d3ec8d4e875e12772b7",
      "name": "Doug Bailyn",
      "email": "doug_bailyn_10032@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "900 WEST END AVE",
      "zip": "10032"
    },
    {
      "id": "fa27e9512db8a8f70d5b68bcc90f1198",
      "name": "Rafael Barranco",
      "email": "rafael_barranco_11377@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "196-15 Hillside Ave",
      "zip": "11377"
    },
    {
      "id": "a22adba5508992832cb981a7890ae68f",
      "name": "Martin Baskin",
      "email": "martin_baskin_11402@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "88-01 Parson Blvd",
      "zip": "11402"
    },
    {
      "id": "af62b101a97ee3d5174785096dc154bc",
      "name": "David Baskin",
      "email": "david_baskin_10044@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "9182905e565d5253019dbd73dbe0d12e",
      "name": "H. Robert Bearnot",
      "email": "h._robert_bearnot_10453@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "1624 University Avenue",
      "zip": "10453"
    },
    {
      "id": "e93167ad3ad8745893dbd020057cd68b",
      "name": "Elliot Belenkov",
      "email": "elliot_belenkov_11220@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "bd1d09bd635984ade02a7dc1eae3bab5",
      "name": "Hillary Bell",
      "email": "hillary_bell_11237@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "1219 liberty avenue",
      "zip": "11237"
    },
    {
      "id": "221268dd7d4a108f182c9a9cc11823c4",
      "name": "Henry Bellutta",
      "email": "henry_bellutta_11208@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "432 Bedford Avenue",
      "zip": "11208"
    },
    {
      "id": "f611be9f920352024bc55a0f007c64cd",
      "name": "Olga Belostotsky",
      "email": "olga_belostotsky_11373@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "230 Beach 102nd St",
      "zip": "11373"
    },
    {
      "id": "8db1534d3ac0d07daff5fac7e9f40b5b",
      "name": "Harvey Benovitz",
      "email": "harvey_benovitz_11379@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "62f866e4ec16166d58e136ed752c8608",
      "name": "Dominick Bioh",
      "email": "dominick_bioh_11216@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "6805 Fort Hamilton Parkway",
      "zip": "11216"
    },
    {
      "id": "fb971cff96b249742aff9df9066dfb17",
      "name": "Larry Bishop",
      "email": "larry_bishop_10032@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "858eda9bbbe7274e7b561b31b3c7742e",
      "name": "Ellen Blye",
      "email": "ellen_blye_10033@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "650 First Ave - 7th F",
      "zip": "10033"
    },
    {
      "id": "54e495fcc0286aa9e3f1d9e96fe6eabb",
      "name": "Victor Bulnes",
      "email": "victor_bulnes_11235@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "\"823 60th Street, 11 Floor\"",
      "zip": "11235"
    },
    {
      "id": "aabe4e335736019dcbe808ceffd3749e",
      "name": "Krisczar Bungay",
      "email": "krisczar_bungay_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "ba233c61bfc5a1c7aa984c5c01a11b0f",
      "name": "Naghma Burney",
      "email": "naghma_burney_11224@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "829543cf0487686f10dcc388c418b821",
      "name": "Magdalena Cadet",
      "email": "magdalena_cadet_11236@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "a9123f897c54e4a92b2c92489ea9efdf",
      "name": "Arturo Caesar",
      "email": "arturo_caesar_11432@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "40-08 Forley Street",
      "zip": "11432"
    },
    {
      "id": "a8ba3879d749d8f26386a720f24e655e",
      "name": "Sheila Cain",
      "email": "sheila_cain_11213@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "1335 Ocean Parkway",
      "zip": "11213"
    },
    {
      "id": "09db7f679ef3785fd75a4d4639e989c9",
      "name": "Robin Campos",
      "email": "robin_campos_11435@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "234-32 Merrick Blvd.",
      "zip": "11435"
    },
    {
      "id": "fc941c6696cecd07b663d5c49b5e2b06",
      "name": "Nicholas Cannone",
      "email": "nicholas_cannone_10021@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "8bc35bb5d1a51e929fd9adbcbe4a8804",
      "name": "Sixto R. Caro",
      "email": "sixto_r._caro_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "296ed49d4e9c86623059359366291fb2",
      "name": "Ward Carpenter",
      "email": "ward_carpenter_11418@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "342 Beach 54th Street",
      "zip": "11418"
    },
    {
      "id": "7668d69a4981b37c98a4d26cc2f582ec",
      "name": "Richard Cedeno",
      "email": "richard_cedeno_11205@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "248 Roebling Street",
      "zip": "11205"
    },
    {
      "id": "bed7f841fc9db79042d5e8ce4598cb25",
      "name": "Melissa Chan",
      "email": "melissa_chan_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "\"133-36 41st Road, Suite 1\"",
      "zip": "11372"
    },
    {
      "id": "227ec4b0cd7231b272f2f9960f2f09ef",
      "name": "Charles Chan",
      "email": "charles_chan_11355@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "9c9feb5c675a9e5a413c4c80566989f9",
      "name": "Sandy Cheung",
      "email": "sandy_cheung_10312@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "11 Ralph Pl Suite 214",
      "zip": "10312"
    },
    {
      "id": "794a8e379ca43db1c82db62634f816b2",
      "name": "Eugene (Chien K.) Chiang",
      "email": "eugene_(chien_k.)_chiang_10467@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "3383d78fe9bc8175b5e6d5bcf27105c4",
      "name": "Herbert Chin",
      "email": "herbert_chin_11210@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "67b9bddd0eec640d2bd6079adac12c03",
      "name": "Reza Chowdhury",
      "email": "reza_chowdhury_11377@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "97-03 Springfield Blvd",
      "zip": "11377"
    },
    {
      "id": "034e8eeef4c11279841142da53f12e2c",
      "name": "Sunanda Chugh",
      "email": "sunanda_chugh_11355@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "41-61 Kissena Blvd.",
      "zip": "11355"
    },
    {
      "id": "794b3e5f4cfea93931e460f51bfd77c4",
      "name": "Robert Cohen",
      "email": "robert_cohen_10013@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "8c1dbe6486d10409d3314e113513dc34",
      "name": "Claudia Cooke",
      "email": "claudia_cooke_10461@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "\"1262 Boston Road, suite 2\"",
      "zip": "10461"
    },
    {
      "id": "97640a2fa05a293fe5d0c0e4dd193a3f",
      "name": "Michael Correa",
      "email": "michael_correa_10463@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "3510 Bainbridge Avenue",
      "zip": "10463"
    },
    {
      "id": "96b987db2ab487a209f5e6d868910d8a",
      "name": "Nadge Coupet",
      "email": "nadge_coupet_11411@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "131-76 Laurelton Parkway",
      "zip": "11411"
    },
    {
      "id": "f2b084b567ed9c283da82abde143cf0b",
      "name": "Jay Cowan",
      "email": "jay_cowan_10011@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "e08155c2fbde098992cf3e58e25143bd",
      "name": "Elizabeth Cruz",
      "email": "elizabeth_cruz_11368@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "29-22 30th Avenue",
      "zip": "11368"
    },
    {
      "id": "2d40ccb031252210d8287b2c7cdacfae",
      "name": "Patrick Dalton",
      "email": "patrick_dalton_11377@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "205-16 Linden blvd",
      "zip": "11377"
    },
    {
      "id": "30c7715dcd74651b72ef0fcd9bcabac1",
      "name": "Olugbenga Dawodu",
      "email": "olugbenga_dawodu_11203@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "771eff8d83bb64b835debb50b6c36eb5",
      "name": "John Delloso",
      "email": "john_delloso_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "37-11 88th Street",
      "zip": "11355"
    },
    {
      "id": "38be21ae0215568a6b0b4738f9c7f02f",
      "name": "Ramon Delmonte",
      "email": "ramon_delmonte_10451@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "860 GRAND CONCOURSE",
      "zip": "10451"
    },
    {
      "id": "4f2cfa0412b7f60ab2e012f15592ad1a",
      "name": "Stephen Dillon",
      "email": "stephen_dillon_11237@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "86 East 49th Street",
      "zip": "11237"
    },
    {
      "id": "683910cace4960d7fe7238fe70c1b22e",
      "name": "Frances Dirks",
      "email": "frances_dirks_11219@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1421 E 2ND ST",
      "zip": "11219"
    },
    {
      "id": "a00bd1c97d390d68361307126c57204a",
      "name": "ARTHUR DOVE",
      "email": "arthur_dove_11419@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "114-06 Queens Blvd",
      "zip": "11419"
    },
    {
      "id": "0885f1da5b518bec48eb700dbf79b628",
      "name": "Bienvenido Fajardo",
      "email": "bienvenido_fajardo_11237@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "220de694beccb83efc5dfe58fb425bff",
      "name": "Laszlo Feher",
      "email": "laszlo_feher_10013@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "68 Bayard Street",
      "zip": "10013"
    },
    {
      "id": "223178f59ab5adcb6363161bbdf10225",
      "name": "Jose Fibrellet",
      "email": "jose_fibrellet_10027@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "161 Madison Ave",
      "zip": "10027"
    },
    {
      "id": "4b0fb711496da50820f5012af04d43b5",
      "name": "Steven Field",
      "email": "steven_field_11209@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "799088e6f5de649487a3927ee511358b",
      "name": "Kara Fine",
      "email": "kara_fine_11204@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "796 Drew Street",
      "zip": "11204"
    },
    {
      "id": "efdd5acb417617ea75d15c2f4d64d535",
      "name": "Felix Florimon",
      "email": "felix_florimon_11373@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "95cb3a67e9e68aa13e8884a9b5a7fcd9",
      "name": "Suzanne Flower",
      "email": "suzanne_flower_10033@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "333 w. 51st street",
      "zip": "10033"
    },
    {
      "id": "46689716f655bf643df1f0c7d30f522c",
      "name": "Dean Fong",
      "email": "dean_fong_10016@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "629 W 185th St",
      "zip": "10016"
    },
    {
      "id": "532accc1d0b29a5dcf9b2ace4e92d5dd",
      "name": "Max Francois",
      "email": "max_francois_10013@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "38c08b641f9cc742822adddcfc42f737",
      "name": "Michael Frank",
      "email": "michael_frank_11243@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "834 Coney Island Avenue",
      "zip": "11243"
    },
    {
      "id": "8d3d6c241c45aff8d3a3a9cb88baecf0",
      "name": "Roberto Gabitto",
      "email": "roberto_gabitto_10030@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "ad17cfd091fa9d13cb1c7f8e6616ec5a",
      "name": "Zil Goldstein",
      "email": "zil_goldstein_11237@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "370 9th Street",
      "zip": "11237"
    },
    {
      "id": "e0fdceeda54e9dc02f3fd1f1a3d3d0ab",
      "name": "Maria Gomez",
      "email": "maria_gomez_10459@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "3125 TIBBETT AVENUE",
      "zip": "10459"
    },
    {
      "id": "69d15ecdef8d9757fc537962045e0bbf",
      "name": "David Gomez",
      "email": "david_gomez_11212@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "450 clarkson ave",
      "zip": "11212"
    },
    {
      "id": "b4ccc2b2831b0c58044bb4297cc56f46",
      "name": "Cheng Gonjon",
      "email": "cheng_gonjon_10458@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "2386 Jerome Avenue",
      "zip": "10458"
    },
    {
      "id": "7c624ebf78e469357f625e5481a67ce3",
      "name": "Fausto Gonzalez",
      "email": "fausto_gonzalez_11373@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "230 Beach 102nd St",
      "zip": "11373"
    },
    {
      "id": "c227f1f057286d974e41b4b0c4b9a270",
      "name": "Franz Goyzueta",
      "email": "franz_goyzueta_11418@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "3907 Prince St",
      "zip": "11418"
    },
    {
      "id": "92abcf20d1a6ba19123d0a4e7b50c3f4",
      "name": "Jeffrey Graf",
      "email": "jeffrey_graf_10033@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "\"2 Mott street,suite203\"",
      "zip": "10033"
    },
    {
      "id": "bbab8e13ce0664f990622698d9696605",
      "name": "Dov Grant",
      "email": "dov_grant_10033@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "170 West 12th Street",
      "zip": "10033"
    },
    {
      "id": "b87c5e43754de17491f9807ae050bdbf",
      "name": "Loren Greene",
      "email": "loren_greene_11355@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "24aaa503bcd1256354bc4e4f8ebb7c8e",
      "name": "Howard Grossman",
      "email": "howard_grossman_10033@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "\"3410-3418 Broadway, 2nd floor\"",
      "zip": "10033"
    },
    {
      "id": "3fa64364592a14316923b05765fd02f2",
      "name": "Howard Grossman",
      "email": "howard_grossman_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "57791dfa64551b27d4aa5b61b9365e12",
      "name": "Gladstone Gunnis",
      "email": "gladstone_gunnis_11230@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "326 7th Street",
      "zip": "11230"
    },
    {
      "id": "313b2e677b2b71b1f8a87a91b227917e",
      "name": "Pedro Guzman",
      "email": "pedro_guzman_11205@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "7513 Ft. Hamilton Pky",
      "zip": "11205"
    },
    {
      "id": "7fa05c94ad550748e1732920f1c7dabb",
      "name": "Pedro Guzman",
      "email": "pedro_guzman_10032@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "8650d986253c6765be209a1411105f7c",
      "name": "Muhammad M. Haque",
      "email": "muhammad_m._haque_10458@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "2386 Jerome Avenue",
      "zip": "10458"
    },
    {
      "id": "59f75fd1178662e9080858b5ba9a0a37",
      "name": "Suresh Hemrajani",
      "email": "suresh_hemrajani_11203@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "23025b1b617375a528cfc43218d5cbeb",
      "name": "Lawrence Herman",
      "email": "lawrence_herman_10457@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "52d2088660a955d80069c76ea86082d4",
      "name": "Maria Del Carmen Hidalgo",
      "email": "maria_del_carmen_hidalgo_11203@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "354 Monroe Place",
      "zip": "11203"
    },
    {
      "id": "eda333452053b570209d0ef5956af986",
      "name": "Gregorio Hidalgo",
      "email": "gregorio_hidalgo_11355@gmail.com",
      "specilization": "cardiologist",
      "borough": "Staten Island",
      "address": "29-28 41st Avenue",
      "zip": "11355"
    },
    {
      "id": "7f2c9bc864602af651ad3bbcecce7c16",
      "name": "Gregorio Hidalgo",
      "email": "gregorio_hidalgo_11373@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "d1d74c0e7d946b0d4a789e350ff99b9c",
      "name": "Lawrence Hitzeman",
      "email": "lawrence_hitzeman_11224@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "49c8011cf129cfcf57bb2c47547b4dfa",
      "name": "Eileen Hoffman",
      "email": "eileen_hoffman_10012@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "245 East 35th Street",
      "zip": "10012"
    },
    {
      "id": "3cc5b6b55c360a406d330a3aad4d4156",
      "name": "Stephen Hofmeister",
      "email": "stephen_hofmeister_10034@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "See Note-",
      "zip": "10034"
    },
    {
      "id": "c8d1f8455e17f0c30a1b4941cb895f6a",
      "name": "Angela Hon",
      "email": "angela_hon_10463@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "1262 Boston Road",
      "zip": "10463"
    },
    {
      "id": "392db2cb381c17eeeac9babfb0de822c",
      "name": "Patrick Hu",
      "email": "patrick_hu_11354@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "\"136-20 38th Ave,Suite 8E\"",
      "zip": "11354"
    },
    {
      "id": "9fd9719cf2c1fd82c37efbaf505aa556",
      "name": "Beverly Hurd",
      "email": "beverly_hurd_10032@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "1d9e963e25b0864cdee20a6b087f79aa",
      "name": "Gustavo Insignares",
      "email": "gustavo_insignares_10463@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "3200 Bronx Blvd",
      "zip": "10463"
    },
    {
      "id": "4ff616da59c71838093b3c3bb6151e48",
      "name": "Abdul-Haki Issah",
      "email": "abdul-haki_issah_11373@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "42-64 KISSENA BLVD",
      "zip": "11373"
    },
    {
      "id": "5217a05d84b5f5685a725e97aef8808b",
      "name": "Marilyn Jackson",
      "email": "marilyn_jackson_11368@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "\"1545 Atlantic Avenue, Suite 108.\"",
      "zip": "11368"
    },
    {
      "id": "3bee5aadcb3449be2149c066cca0eef1",
      "name": "Wuhua Jing",
      "email": "wuhua_jing_11230@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "1103 Cortelyou Road",
      "zip": "11230"
    },
    {
      "id": "cc95aa697562a84781b521ea093d1362",
      "name": "Timothy Johnson",
      "email": "timothy_johnson_10014@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "211 E 51st St",
      "zip": "10014"
    },
    {
      "id": "63fa5c8d9c377bd1e92dd0b74b466133",
      "name": "Keith Joseph",
      "email": "keith_joseph_11435@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "\"39-07 Prince Street, Suite 3A\"",
      "zip": "11435"
    },
    {
      "id": "7e638cb194d9266100ed31781ce71437",
      "name": "Indira Kairam",
      "email": "indira_kairam_11354@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "32cc0db6e43e2f8c42ab33529f0a025a",
      "name": "Indira Kairam",
      "email": "indira_kairam_11356@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "7cb943ce0ca8b7a6c5ae2be9712bddc1",
      "name": "David Kaplovitz",
      "email": "david_kaplovitz_11219@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "5211 16 TH AVE.",
      "zip": "11219"
    },
    {
      "id": "0fe3c1ec908888826252983f059f8001",
      "name": "David Kaplowitz",
      "email": "david_kaplowitz_10013@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "435 Fort Washington Avenue Suite 1C",
      "zip": "10013"
    },
    {
      "id": "de4c3627980ff85bf3a173c78100890c",
      "name": "Allen M. Kaufman",
      "email": "allen_m._kaufman_11221@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "4819 14th Avenue",
      "zip": "11221"
    },
    {
      "id": "d4d2f3a38b87482c4214c9f439433efa",
      "name": "Yevgeniya Kaykova",
      "email": "yevgeniya_kaykova_10028@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "210 East 86 Street",
      "zip": "10028"
    },
    {
      "id": "d8e4b2ea0c2e8365cf02ea7de1386907",
      "name": "Mayreen Kelleher",
      "email": "mayreen_kelleher_10016@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "629 W 185th St",
      "zip": "10016"
    },
    {
      "id": "56405b2fa1e2edc0c76660f9460544c2",
      "name": "David Kim",
      "email": "david_kim_10468@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "2844 Briggs Avenue",
      "zip": "10468"
    },
    {
      "id": "71cdbad0ddce3993c6cc88396e94e5f7",
      "name": "Chun Kit Chan",
      "email": "chun_kit_chan_11221@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "231 SOUTH 3RD STREET",
      "zip": "11221"
    },
    {
      "id": "42010b92bcdbdb7cd76c81106e4a1c64",
      "name": "Paul Knoepflmacher",
      "email": "paul_knoepflmacher_11221@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "\"86 East 49 St , Suite G\"",
      "zip": "11221"
    },
    {
      "id": "fed8f38fd50b2a18e330622d272a4f77",
      "name": "Stacy Kreiswirth",
      "email": "stacy_kreiswirth_10013@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "\"221 W. 138th St., Ground Flr, Medical Suite\"",
      "zip": "10013"
    },
    {
      "id": "2ee7c9adb12e223a2a5df266c1aa98d3",
      "name": "Meron Kristos",
      "email": "meron_kristos_10031@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "250 W57th Street Ste 1430",
      "zip": "10031"
    },
    {
      "id": "076a15404f9b508e438a51dbab2f267f",
      "name": "Etan Kurland",
      "email": "etan_kurland_11103@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "93-20 A Roosevelt Avenue",
      "zip": "11103"
    },
    {
      "id": "a515872b47a53e2424f97e77c12d0a92",
      "name": "Jeffrey Kwong",
      "email": "jeffrey_kwong_11203@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "1809895980dcbe0ce4ddf4abb77b592c",
      "name": "Eleanor Lai",
      "email": "eleanor_lai_10032@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "ec1e3d327d50ffe390f44b210930c981",
      "name": "Ching-Yin Lam",
      "email": "ching-yin_lam_11375@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "\"42-31 Colden Street, #109\"",
      "zip": "11375"
    },
    {
      "id": "bca4da5f3332327d97e21b71211facc9",
      "name": "Larry Landphair",
      "email": "larry_landphair_10011@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "d5c46abdbe5631fa037bfc7cd836039a",
      "name": "James Lax",
      "email": "james_lax_11203@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "4a715961bc7692a3ca51d4a68ad7471e",
      "name": "Shuk-Yi Lee",
      "email": "shuk-yi_lee_10467@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "17cf8a48bee5711d21deef261d3d55b4",
      "name": "Jee Sook Lee",
      "email": "jee_sook_lee_11372@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "\"75-80 184th Street, Union Tpk.\"",
      "zip": "11372"
    },
    {
      "id": "b3efa96cbb1005e8ac135407284033d5",
      "name": "Stuart Lewis",
      "email": "stuart_lewis_11372@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "9-15 166th Street #6A",
      "zip": "11372"
    },
    {
      "id": "222022bc5f266e84e138f70e2a28cd28",
      "name": "Weiguo Lin",
      "email": "weiguo_lin_11222@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "5721-A 5th Ave",
      "zip": "11222"
    },
    {
      "id": "76ef394267a216e99533ac06a8300cf6",
      "name": "Todd Linden",
      "email": "todd_linden_11373@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "40-04 Bowne St",
      "zip": "11373"
    },
    {
      "id": "b25c9a40d8d55a89f3ab6ff70584b374",
      "name": "Lewis R. Lipsey",
      "email": "lewis_r._lipsey_11373@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "a83306d4fa4c52513b90694eb8b4d6d9",
      "name": "Polina Liss",
      "email": "polina_liss_11206@gmail.com",
      "specilization": "allergologists",
      "borough": "Bronx",
      "address": "8684 15th Avenue",
      "zip": "11206"
    },
    {
      "id": "ac9aeeffb2dc22465ed864cb2117f9c8",
      "name": "Jeffrey Kee Low",
      "email": "jeffrey_kee_low_11205@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "7bc709ce5542daba2194943f25822deb",
      "name": "Ian Lustbader",
      "email": "ian_lustbader_11385@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "141-49 70 Road",
      "zip": "11385"
    },
    {
      "id": "8d7af06269a7701760a8725e76a62750",
      "name": "Mariana Marcu",
      "email": "mariana_marcu_10467@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "814 East 156 Street",
      "zip": "10467"
    },
    {
      "id": "9b62e2158773a3b4d8c057e635c04cc5",
      "name": "John Mark",
      "email": "john_mark_11233@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "1125 Fulton Street",
      "zip": "11233"
    },
    {
      "id": "d46343f2ba0223dfac5c200edf3b619b",
      "name": "Robert Mayes",
      "email": "robert_mayes_11229@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "1166 Eastern Parkway",
      "zip": "11229"
    },
    {
      "id": "de9fcbc9a9d35a4784f88c9f675ad98a",
      "name": "Todd Mcniff",
      "email": "todd_mcniff_11354@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "37-57 91st Street",
      "zip": "11354"
    },
    {
      "id": "63cd21914049cb467fde019154a908ba",
      "name": "Todd McNiff",
      "email": "todd_mcniff_11219@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "775 57th Street",
      "zip": "11219"
    },
    {
      "id": "a8b6811773eeeee7ce1d5421cbaaacb5",
      "name": "Craig Metroka",
      "email": "craig_metroka_10013@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "85ba03809a1e5e7b56852503e472f3c9",
      "name": "Haleh Milani",
      "email": "haleh_milani_10010@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "160 East 32nd St",
      "zip": "10010"
    },
    {
      "id": "7f92141a6bce21dc033d5465e31c5d3b",
      "name": "Lisa Minsky-Primus",
      "email": "lisa_minsky-primus_11372@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "\"133-36 41st Road, Suite 1\"",
      "zip": "11372"
    },
    {
      "id": "f741da27ee37c40f6b4c8b14e6491be9",
      "name": "Harrison F. Mitchell",
      "email": "harrison_f._mitchell_11375@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "89-18 Lefferts Blvd",
      "zip": "11375"
    },
    {
      "id": "8bfab2657b62bdb110f7ba8e57118246",
      "name": "Masoud Moarefi",
      "email": "masoud_moarefi_11224@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "011bba05825284c8b0063aa195ad9a88",
      "name": "Arpana Modi",
      "email": "arpana_modi_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "76-01 113 Street",
      "zip": "11372"
    },
    {
      "id": "757b02bab9f53fc278aae560a15d19fb",
      "name": "Sushama Mody",
      "email": "sushama_mody_11368@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "eb4d4222a19296b123eb5bc9bffc78c8",
      "name": "Naomi Molner",
      "email": "naomi_molner_11229@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "1166 Eastern Parkway",
      "zip": "11229"
    },
    {
      "id": "bd6ef6576ec76c861587c097abecd6c5",
      "name": "Ramon Moquete",
      "email": "ramon_moquete_11429@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "\"172-27 Highland Ave, Suite 1 B\"",
      "zip": "11429"
    },
    {
      "id": "ba3af3780eb851ad5d4c2d293892f0d9",
      "name": "Robert Murayama-Greenbaum",
      "email": "robert_murayama-greenbaum_10021@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "b70bd8a89d1effc49b20dad938709fab",
      "name": "Cynthia Myers",
      "email": "cynthia_myers_10458@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "60 W Kingsbridge Road",
      "zip": "10458"
    },
    {
      "id": "a1db5bf5d0d050eb6dd1ec8e25748197",
      "name": "Richard Myint",
      "email": "richard_myint_10034@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "501 Main Street",
      "zip": "10034"
    },
    {
      "id": "ea8adf91fa1eed018889fcd09d8b5a72",
      "name": "Haque Naghmana",
      "email": "haque_naghmana_11418@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "64-15 Fresh Pond Rd",
      "zip": "11418"
    },
    {
      "id": "a52082af8b8567adc791597e4f45eb01",
      "name": "Altagracia Navarro",
      "email": "altagracia_navarro_11210@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "04f44d3bc1bafe56e14c4a9738a2ac07",
      "name": "Richard Neufeld",
      "email": "richard_neufeld_11203@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "236908a1b4005f9a0caf907ee7a2504e",
      "name": "Dang Nguyen",
      "email": "dang_nguyen_10034@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "118 Baxter Street",
      "zip": "10034"
    },
    {
      "id": "6df53a04697bada390c2c8cc443bc039",
      "name": "Candido Norberto",
      "email": "candido_norberto_11103@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "93-20 A Roosevelt Avenue",
      "zip": "11103"
    },
    {
      "id": "f4adddd32b5250f4cfc3ab9c8e0c9cca",
      "name": "Danielle Ogopozo",
      "email": "danielle_ogopozo_10312@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "e982c79a14122acc4981ad1c16a34011",
      "name": "Kevin O'Hara",
      "email": "kevin_o'hara_11203@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "4506 8th Avenue",
      "zip": "11203"
    },
    {
      "id": "dffccca53b00443aa5517ec24356f8e2",
      "name": "Jose Ortiz",
      "email": "jose_ortiz_10453@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "1624 University Avenue",
      "zip": "10453"
    },
    {
      "id": "0d2e507911dd70a50995b17d58e8671c",
      "name": "Changhee Paek",
      "email": "changhee_paek_10458@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "1715 University Blvd",
      "zip": "10458"
    },
    {
      "id": "167fdf0e996d580ce9c7fbc783bedfcc",
      "name": "Lucille L. Pak",
      "email": "lucille_l._pak_11432@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "196-02 hillside",
      "zip": "11432"
    },
    {
      "id": "765554994fc1da6a8d56af3a9305f549",
      "name": "Charles Paolino",
      "email": "charles_paolino_10032@gmail.com",
      "specilization": "toxicologists",
      "borough": "Jackson Heights",
      "address": "160 Bennett Avenue",
      "zip": "10032"
    },
    {
      "id": "7071f177b9f69ed640a5acb231c378e1",
      "name": "Hemant Patel",
      "email": "hemant_patel_10022@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "435 Fort Washington Avenue #1H",
      "zip": "10022"
    },
    {
      "id": "f42bfb1a0fb4828214324c884b356990",
      "name": "Babubhai Patel",
      "email": "babubhai_patel_11220@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "924 49th St.",
      "zip": "11220"
    },
    {
      "id": "4163177504b85f1b39b50186bc4d308b",
      "name": "Vincent Pedre",
      "email": "vincent_pedre_11217@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "79e0fac5c2bbf3176ef632b62b4df027",
      "name": "Yomaris Pena",
      "email": "yomaris_pena_11213@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "1203 Avenue J",
      "zip": "11213"
    },
    {
      "id": "7275640c6a4129b4bc1c47f5da208709",
      "name": "Naveen Pesala",
      "email": "naveen_pesala_11218@gmail.com",
      "specilization": "nephrologist",
      "borough": "Staten Island",
      "address": "450 clarkson Ave",
      "zip": "11218"
    },
    {
      "id": "c466378fdf73c86669871131491fd576",
      "name": "Sarah Ponce",
      "email": "sarah_ponce_11379@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "10cb7ccaefd5841eaebaac3ef5d9b264",
      "name": "Diego Ponieman",
      "email": "diego_ponieman_11354@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "112-03 Queens Blvd",
      "zip": "11354"
    },
    {
      "id": "d51b0f20efd94aec91b12375f9fe09bb",
      "name": "Joseph Poon",
      "email": "joseph_poon_10013@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "\"594 Broadway, Suite 310\"",
      "zip": "10013"
    },
    {
      "id": "8149d25c3e09995707209c3a38bc57d4",
      "name": "Nina Priven",
      "email": "nina_priven_10033@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "2235 8th Avenue",
      "zip": "10033"
    },
    {
      "id": "d5312a0f1fa02831c9180a5beddaac09",
      "name": "Patricia Pugni",
      "email": "patricia_pugni_10027@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "314 W. 14th Street",
      "zip": "10027"
    },
    {
      "id": "480dcb04570907c87251ce9ca68e4ebd",
      "name": "Mara Pulcher",
      "email": "mara_pulcher_11218@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "712 Knickerbocker Avenue",
      "zip": "11218"
    },
    {
      "id": "e05983c5ea031168f7f0ce7ac97fd061",
      "name": "Muhammad K Qadri",
      "email": "muhammad_k_qadri_10128@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "247 3rd Ave",
      "zip": "10128"
    },
    {
      "id": "6bc7027558a8fe3d07b609838a126fea",
      "name": "Julio Ramirez",
      "email": "julio_ramirez_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "f5c24e5db019db0c2b3ed33e8e7ae803",
      "name": "\"Papanna Ravichandra, MD\"",
      "email": "\"papanna_ravichandra,_md_11355@gmail.com\"",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "\"109-33 71 Road, Suite 1B\"",
      "zip": "11355"
    },
    {
      "id": "4858b9d5aa45b94ed9845c248f154e76",
      "name": "Elliot Rayfield",
      "email": "elliot_rayfield_11355@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "13338 41st Rd # C03",
      "zip": "11355"
    },
    {
      "id": "6e9c0b3b58315fea8ac0fe0eb73b9989",
      "name": "Jack Resnick",
      "email": "jack_resnick_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Bronx",
      "address": "622 OCEAN AVENUE",
      "zip": "11220"
    },
    {
      "id": "dd45f828431588b821057fa6ab43b890",
      "name": "Elsa J. Reyes",
      "email": "elsa_j._reyes_11221@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "4819 14th Avenue",
      "zip": "11221"
    },
    {
      "id": "44fe07c893827b71b6f6450f9c3bb93d",
      "name": "Felix Rodriguez",
      "email": "felix_rodriguez_11221@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "4819 14th Avenue",
      "zip": "11221"
    },
    {
      "id": "40af4ca2b74a6e115d50f0a6b2dd6e68",
      "name": "Robert Romanoff",
      "email": "robert_romanoff_11372@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "7a6aee0204ca57f61000a4d1beaa14eb",
      "name": "Sandra Rosado",
      "email": "sandra_rosado_11230@gmail.com",
      "specilization": "psychologist",
      "borough": "Manhattan",
      "address": "232 Sherman Ave. Suite #4",
      "zip": "11230"
    },
    {
      "id": "6e62acb03bc717a6bb7d7418b67028da",
      "name": "Francisco Rosario",
      "email": "francisco_rosario_11354@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "241-08 140th Ave",
      "zip": "11354"
    },
    {
      "id": "0c90599517a6346978332a03a01350a7",
      "name": "Jean Paul Salinas",
      "email": "jean_paul_salinas_11204@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "\"839 58th Street, 2nd Floor\"",
      "zip": "11204"
    },
    {
      "id": "1f842ad77fc57e68cf6c09c84a94dc8c",
      "name": "Elizabeth Salzer",
      "email": "elizabeth_salzer_11355@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "115 13A Merrick Blvd",
      "zip": "11355"
    },
    {
      "id": "2810f912a9ad87f90ad1e798ba3494a1",
      "name": "Michelle K Samuels",
      "email": "michelle_k_samuels_10038@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "47 Sickles suite 1A",
      "zip": "10038"
    },
    {
      "id": "88974c1f23a21857ca2d2066aa49e088",
      "name": "Veeraf Sanjana",
      "email": "veeraf_sanjana_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "1624 University Avenue",
      "zip": "10453"
    },
    {
      "id": "f169a80ee2b30b0f6cfdf4b048a98a91",
      "name": "Walt Sargeant",
      "email": "walt_sargeant_11372@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "6437482866c80a33eaaf641897e394c2",
      "name": "Leon Scrimmager",
      "email": "leon_scrimmager_10453@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "7d60c83f6cfe8c171ee9368b1ccc09b6",
      "name": "Robert Segal",
      "email": "robert_segal_11423@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "105-55 62nd Drive Suite 1-H",
      "zip": "11423"
    },
    {
      "id": "c8119e36b1828018e69c152e22dd41d5",
      "name": "Michelle Senbertrand",
      "email": "michelle_senbertrand_10467@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "84720f162cc911a3294cc534fd15e205",
      "name": "Jilan Shah",
      "email": "jilan_shah_10027@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "4260 Broadway",
      "zip": "10027"
    },
    {
      "id": "a111b91f150af3fc998ef643815b9987",
      "name": "Jilan Shah",
      "email": "jilan_shah_10021@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "44c15d01da98ab05dd129a332e835352",
      "name": "Dana Shani",
      "email": "dana_shani_10451@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "2960 Grand Concourse L1",
      "zip": "10451"
    },
    {
      "id": "c256777ca1273e5e258bbf735763a89e",
      "name": "William Shay",
      "email": "william_shay_10452@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "1560 GRAND CONCOURSE",
      "zip": "10452"
    },
    {
      "id": "7613825d45ed68b5ab582ccefaff6cac",
      "name": "Iris Sherman",
      "email": "iris_sherman_10033@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "88-23 Justice Avenue",
      "zip": "10033"
    },
    {
      "id": "9aa2eb0d87fca5a69d494b26f7d0f929",
      "name": "Nirupama Somasundaram",
      "email": "nirupama_somasundaram_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "133-38 41st Rd Suite 2C",
      "zip": "11354"
    },
    {
      "id": "b28273c3ff271f76c6888f26e0098603",
      "name": "Lucy Sourial",
      "email": "lucy_sourial_11219@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "1125 FULTON STREET 3RD FLOOR",
      "zip": "11219"
    },
    {
      "id": "b27c56e99c8e89e3225ad38c4e696750",
      "name": "Frank Spinelli",
      "email": "frank_spinelli_11228@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "3131 Kings Highway",
      "zip": "11228"
    },
    {
      "id": "a46361f798b45dcc0f1532eb5626cceb",
      "name": "\"Elbert St. Claire, III\"",
      "email": "\"elbert_st._claire,_iii_10032@gmail.com\"",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "39251f6631e0af1c93f4ba8f1c18e533",
      "name": "Anthony Starpoli",
      "email": "anthony_starpoli_11423@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "105-55 62nd Drive Suite 1-H",
      "zip": "11423"
    },
    {
      "id": "f182c836fc22ed2cf7b4633315221edd",
      "name": "Mary Stein",
      "email": "mary_stein_10021@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "57e18b562d8a4da2dd062c28e387cc6c",
      "name": "Brian Sumner",
      "email": "brian_sumner_10458@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "48eeb8b083fa8063be636d5f1ed58356",
      "name": "Ramon Tallaj",
      "email": "ramon_tallaj_10030@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Staten Island",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "04e9931ed12d82b957d234343aaf4e43",
      "name": "PCP TBD",
      "email": "pcp_tbd_10457@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "8a42bf0dd0c4043fe470dd3cedfe4d3a",
      "name": "Ishita Thakkar",
      "email": "ishita_thakkar_11422@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "200-03 Linden Blvd",
      "zip": "11422"
    },
    {
      "id": "fa3be1f5dd3d56eb480dd20a60d28962",
      "name": "Kelly Thompson",
      "email": "kelly_thompson_11209@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "99 moore st suite A",
      "zip": "11209"
    },
    {
      "id": "a5c79098f11b4979201e2d0a6e00a3d9",
      "name": "Henghe Tien",
      "email": "henghe_tien_11230@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "100 Ross Street",
      "zip": "11230"
    },
    {
      "id": "1ffe09a59bda442255a14cf8133a37e0",
      "name": "Suraj Tikko",
      "email": "suraj_tikko_10030@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "45ad116d22f1e5d1a8ce32afcb026fe6",
      "name": "Sirisha R. Tikko",
      "email": "sirisha_r._tikko_11205@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "1517 Voorhies ave 1st floor",
      "zip": "11205"
    },
    {
      "id": "380a47221c5c01f9b9765a6a57f41128",
      "name": "Aldo Torrente",
      "email": "aldo_torrente_11354@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "30-96 51 st",
      "zip": "11354"
    },
    {
      "id": "4ad98ac5fe3d6a8cb497d61717330303",
      "name": "Tien-Tsai Tsai",
      "email": "tien-tsai_tsai_10461@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "3134 E. Tremont Ave",
      "zip": "10461"
    },
    {
      "id": "1effb2c91529121fad3080f7020d3c5d",
      "name": "Thomas V. Tupper",
      "email": "thomas_v._tupper_11238@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "60 Plaza St E # E",
      "zip": "11238"
    },
    {
      "id": "76ef01d1339b6fd2b1aa7f06e01ea83f",
      "name": "Andrew Tzellas",
      "email": "andrew_tzellas_11103@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "1204 Beach 9 St",
      "zip": "11103"
    },
    {
      "id": "e9a803b271dbaf688c5490d513a91461",
      "name": "Tinatin Urphanishvili",
      "email": "tinatin_urphanishvili_11208@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "432 Bedford Avenue",
      "zip": "11208"
    },
    {
      "id": "ce1bcaca4254e50c5812af2c0b606e60",
      "name": "Vidya Valada",
      "email": "vidya_valada_11372@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "4543 43rd Street",
      "zip": "11372"
    },
    {
      "id": "7a24eb22afb0f866b843348b463d5434",
      "name": "Martha Valdivia",
      "email": "martha_valdivia_10031@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "\"10 W 86 St, Apt. 1A\"",
      "zip": "10031"
    },
    {
      "id": "bff9f689755ad1f4d131189297662045",
      "name": "Jose Vargas",
      "email": "jose_vargas_11211@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "446 mcdonald ave",
      "zip": "11211"
    },
    {
      "id": "f8dd4b9370ad8c5f27e153192f30f4ca",
      "name": "Luis Vasquez",
      "email": "luis_vasquez_10458@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "34c67f3e56a7e3645910cfdc895d7495",
      "name": "Mindy Weiss",
      "email": "mindy_weiss_11354@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "133-38 41st Rd Suite 2C",
      "zip": "11354"
    },
    {
      "id": "14065b552012252a9ca16dc6c767e3a4",
      "name": "Karen Weisz",
      "email": "karen_weisz_11367@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "70-31 A 108th",
      "zip": "11367"
    },
    {
      "id": "ee34381bc3ef4cb93bd913350d7e2c3a",
      "name": "Natalie Wilson",
      "email": "natalie_wilson_11218@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "\"350 Ocean Ave, 1B\"",
      "zip": "11218"
    },
    {
      "id": "8eba7b481c63886debaa34bf1d280633",
      "name": "David Woldenberg",
      "email": "david_woldenberg_11355@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "9d42e66e63af747090b7f49e533bf765",
      "name": "Tina Wong",
      "email": "tina_wong_11418@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "64-15 Fresh Pond Rd",
      "zip": "11418"
    },
    {
      "id": "d018111bad0e2b5bc51ecf267577b013",
      "name": "Jimmy Wong",
      "email": "jimmy_wong_11516@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "110-45 Queens Boulevard Suite A",
      "zip": "11516"
    },
    {
      "id": "3dfbc498acb27e23f8ac5fa2e5869d85",
      "name": "Elizabeth Woodford",
      "email": "elizabeth_woodford_10010@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "7cac108d9b6bf70b69c1f50eecee3b62",
      "name": "Grace Wright",
      "email": "grace_wright_11372@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "93-15 Roosevelt Avenue",
      "zip": "11372"
    },
    {
      "id": "aec9adcdf099842bde51599653f22d83",
      "name": "Ya-Hsiu Yen",
      "email": "ya-hsiu_yen_10022@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "33 W. 125th St",
      "zip": "10022"
    },
    {
      "id": "ecb7cccfe7e23875c71aa32b5939693c",
      "name": "Konstantinos Zarkadas",
      "email": "konstantinos_zarkadas_11204@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "\"34 PLAZA STREET, SUITE104\"",
      "zip": "11204"
    },
    {
      "id": "600bea8bf8d866d8101977071804a65a",
      "name": "Liu Zhechun",
      "email": "liu_zhechun_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "\"90-45,Pitkin Ave\"",
      "zip": "11372"
    },
    {
      "id": "d383407cc6816e552022e09a5ed9291d",
      "name": "Hanbin Zheng",
      "email": "hanbin_zheng_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "40-35 95th Street",
      "zip": "11372"
    },
    {
      "id": "acccf8d2922a5ec09a981c33c7c26f9e",
      "name": "Eric Zhou",
      "email": "eric_zhou_10457@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "ea952856befe0623e5296a381af43271",
      "name": "Gino Zunino",
      "email": "gino_zunino_11103@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "30-55 21st Street",
      "zip": "11103"
    },
    {
      "id": "55bcb214b210c0bebe6fd8c1ed1ead87",
      "name": "Richard Chan",
      "email": "richard_chan_11418@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "83-45 Dongan Ave",
      "zip": "11418"
    },
    {
      "id": "e3b97394087847892b6367e1c029d451",
      "name": "Yelena Lindenbaum",
      "email": "yelena_lindenbaum_10032@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "7f38e85433b95c62fc46a90166452634",
      "name": "Kenneth Altabef",
      "email": "kenneth_altabef_10014@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "2450 8th Ave",
      "zip": "10014"
    },
    {
      "id": "5c693d0975c59101c16d37badcf536b2",
      "name": "Amy Bloomgarden",
      "email": "amy_bloomgarden_10033@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "185 Canal Street",
      "zip": "10033"
    },
    {
      "id": "17673a783c573fcca06b5df2ed4dbd0e",
      "name": "Edward Chan",
      "email": "edward_chan_10011@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "c283168c11f5d7dca6e65278d279cc29",
      "name": "Austin Chen",
      "email": "austin_chen_11691@gmail.com",
      "specilization": "psychologist",
      "borough": "Manhattan",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "5e9222c87190946bf0e2a77e5e0f2101",
      "name": "Margaret Cheung",
      "email": "margaret_cheung_11203@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "2379 65th Street",
      "zip": "11203"
    },
    {
      "id": "0805c1342981f4f3b7ac5f94cf9ff3a5",
      "name": "Kecia Gerlach",
      "email": "kecia_gerlach_10021@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "0e8ce3d0ebb79f535a8e9fff77df7abe",
      "name": "Yelena Havryliuk",
      "email": "yelena_havryliuk_10018@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "360 1st Avenue Apartment MG",
      "zip": "10018"
    },
    {
      "id": "2b435a90b34f3e7e3850335b7a7034bd",
      "name": "Jessica Huang",
      "email": "jessica_huang_11368@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "136-20 38th Ave Suite 6M",
      "zip": "11368"
    },
    {
      "id": "baffb2776cf21e2abbebd57333318852",
      "name": "Shazah Khawaja",
      "email": "shazah_khawaja_10011@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "620 columbus ave",
      "zip": "10011"
    },
    {
      "id": "fcbcb8c7543b6e00f9e6e1848f08fb5d",
      "name": "Cynthia Krause",
      "email": "cynthia_krause_10031@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "efad78a14fe9aea9da2937bc927bf24d",
      "name": "Flora Lau",
      "email": "flora_lau_11375@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "92-12 175th Street",
      "zip": "11375"
    },
    {
      "id": "30697c74de4d1e42b1d1c0c491e5ba2f",
      "name": "Yusuf Mamdani",
      "email": "yusuf_mamdani_10461@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "2027 JEROME AVE.",
      "zip": "10461"
    },
    {
      "id": "4eb3674623dde73ac2cdb0501527c5a0",
      "name": "victor Mok",
      "email": "victor_mok_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "ce96ab82eb4a11c78eae74ef05213174",
      "name": "edward Mok",
      "email": "edward_mok_11373@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "\"136-21 Roosevelt Ave, Suite #205\"",
      "zip": "11373"
    },
    {
      "id": "acdc7a851171a13f90dccf4938f05d0a",
      "name": "Gary Mucciolo",
      "email": "gary_mucciolo_11368@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "4c62ac846d784c4c7797a0639b101616",
      "name": "Roland Nyein",
      "email": "roland_nyein_10462@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "6bb6c84d5d8a298c6e96f49515265155",
      "name": "Betty Punzalan",
      "email": "betty_punzalan_10128@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "40 West 135th Street",
      "zip": "10128"
    },
    {
      "id": "4ef1023875226116234a3157aeff8b0b",
      "name": "Lauri Romanzi",
      "email": "lauri_romanzi_10032@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "8f26ed4350c68e4bba246de38b4d3bef",
      "name": "Ida Ellen Schwab",
      "email": "ida_ellen_schwab_11421@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "136-19 41st Ave 2nd Floor",
      "zip": "11421"
    },
    {
      "id": "8893e1f449614d3a2c31085e7d746b86",
      "name": "Caryn Selick",
      "email": "caryn_selick_11366@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "219-02 Linden Blvd",
      "zip": "11366"
    },
    {
      "id": "a75aecd18667643b61a73b26b06a842d",
      "name": "Michael Strongin",
      "email": "michael_strongin_11364@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "86-04 117th. street",
      "zip": "11364"
    },
    {
      "id": "33353e5a68a2e808f9b74add71d0ac9f",
      "name": "Manuel Sy",
      "email": "manuel_sy_11220@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "8434e8ece4042b6ce7922b31ace576d8",
      "name": "Claudia Useda",
      "email": "claudia_useda_10031@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "128 Fort Washington Ave",
      "zip": "10031"
    },
    {
      "id": "d963c160eede8425f9125e4db743b1f3",
      "name": "Jin Wang",
      "email": "jin_wang_11356@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "8e316f8c394b8bbf005c0ee722467657",
      "name": "Alex Wei",
      "email": "alex_wei_11203@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "2378 Ralph Ave",
      "zip": "11203"
    },
    {
      "id": "57647cd7db1a35731d92b36970d99121",
      "name": "Denise West",
      "email": "denise_west_10021@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "2e082732564fb8b40ef657636588fe46",
      "name": "Hui Fang Xiao",
      "email": "hui_fang_xiao_10032@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "5d04656dfc9793f86cdd64f9f0f22787",
      "name": "Tak Yein Lim",
      "email": "tak_yein_lim_11418@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "711 Cedar Lawn",
      "zip": "11418"
    },
    {
      "id": "d630d55d64e4dc9a8aa45ccc685b54dd",
      "name": "Timothy Au",
      "email": "timothy_au_10467@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "2c170ce50f144ff208ccf5d7fdcb09a2",
      "name": "Ira Blanfarb",
      "email": "ira_blanfarb_11204@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "650 5th Avenue",
      "zip": "11204"
    },
    {
      "id": "0f36e2857a4b27333542c67e34302efc",
      "name": "cindy chen",
      "email": "cindy_chen_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "e9f001f1d098723b6721ae9ddefd3bd8",
      "name": "Calvin Chin",
      "email": "calvin_chin_11373@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "23-22 30th Ave.",
      "zip": "11373"
    },
    {
      "id": "767cdfa295171fba9dcd3c335a476bdf",
      "name": "Janet Collins",
      "email": "janet_collins_10011@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "95 University Place",
      "zip": "10011"
    },
    {
      "id": "65e8d8e6a30c3d1559aeb39d3fc522b3",
      "name": "Elizabeth Cruz",
      "email": "elizabeth_cruz_11379@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "ed5feadb6f2dabdffe382007d025ba5f",
      "name": "Ritu Davis",
      "email": "ritu_davis_10467@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "6259ee772262c98605e06b6d7ac2b688",
      "name": "Nicholas DuBois",
      "email": "nicholas_dubois_10462@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "05752a0a4362840ca2e1840d0c9b6821",
      "name": "Sandra Garcia",
      "email": "sandra_garcia_11418@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "4242 Colden St",
      "zip": "11418"
    },
    {
      "id": "a24b2e252e146b4dfbeac5868ee7edc2",
      "name": "Michael Gehl",
      "email": "michael_gehl_11354@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "\"136-20 38th Ave,Suite 8E\"",
      "zip": "11354"
    },
    {
      "id": "6850117c76a2a722f79a16c127ac2591",
      "name": "Newsha Ghodsi",
      "email": "newsha_ghodsi_10305@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "06ee9260aeb9dae4a4def6d8643e6ed8",
      "name": "Joseph Grossman",
      "email": "joseph_grossman_10024@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "102 East 22 St Suite 1",
      "zip": "10024"
    },
    {
      "id": "d0093366641d45bdbce19224dc70727e",
      "name": "Garman Ho",
      "email": "garman_ho_10013@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "593ca28b1ee63e4bdbfd610044b7ac87",
      "name": "Donna Ingram",
      "email": "donna_ingram_11235@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "471 Hart Street",
      "zip": "11235"
    },
    {
      "id": "e8cd4d442e47e3954922215a065c4505",
      "name": "Kazuko Ko",
      "email": "kazuko_ko_11203@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "7d3394af23f633c2ea31ec1358c431cf",
      "name": "Alan Lee",
      "email": "alan_lee_10459@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "3125 TIBBETT AVENUE",
      "zip": "10459"
    },
    {
      "id": "67a449f8453423c7d6af783ce602f100",
      "name": "Jonathan Leung",
      "email": "jonathan_leung_10010@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "160 East 32nd St",
      "zip": "10010"
    },
    {
      "id": "179874fe89357950a7baffaac835e01b",
      "name": "Geraldo Lombardo",
      "email": "geraldo_lombardo_10011@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "95 University Place",
      "zip": "10011"
    },
    {
      "id": "fd5672582a735bca4bd5a8df31a1beeb",
      "name": "SUSAN MARGOLIS",
      "email": "susan_margolis_11224@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "3ab6a28739b2f44208ca85124702be0c",
      "name": "Barbara Medlin",
      "email": "barbara_medlin_10031@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "411 West 113TH Street",
      "zip": "10031"
    },
    {
      "id": "30c5e835cffaca862f8021e64419b4a1",
      "name": "Robert Meltzer",
      "email": "robert_meltzer_11516@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "133-60 41st Avenue",
      "zip": "11516"
    },
    {
      "id": "06e162d522e658cc9814b044f8b12017",
      "name": "Dominic Moccia",
      "email": "dominic_moccia_10031@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "5fe706847f2800b5cac0f11551b49c57",
      "name": "Kuo Nan-Hsien",
      "email": "kuo_nan-hsien_11372@gmail.com",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "83-10 Queens Blvd",
      "zip": "11372"
    },
    {
      "id": "5697876e1e0cda3ad2425a537a7a7ee1",
      "name": "Ransford Newhad",
      "email": "ransford_newhad_11368@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "e6c694070f791ad2f24370583371c815",
      "name": "Van Hong Nguyen",
      "email": "van_hong_nguyen_10032@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "435 FORT WASHINGTON AVE",
      "zip": "10032"
    },
    {
      "id": "63498cea47a734cc030f3cecf23f05fb",
      "name": "Nadja Pierre",
      "email": "nadja_pierre_10463@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "6d24af668ff38e3f586a01ada09ab712",
      "name": "Theresa Pondok",
      "email": "theresa_pondok_11354@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "80-37 Broadway",
      "zip": "11354"
    },
    {
      "id": "425c647d4ea421c1edb8bd2a22f5a7a8",
      "name": "Xinru Qian",
      "email": "xinru_qian_11228@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "3131 Kings Highway",
      "zip": "11228"
    },
    {
      "id": "1e0e4db928cfcb795537d0f7a73240d8",
      "name": "Bingjing Roberts",
      "email": "bingjing_roberts_11377@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "0fd622d150cfca2997e5b1909bdadb6b",
      "name": "Paul Romanello",
      "email": "paul_romanello_10028@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "160 East 32nd Street #102",
      "zip": "10028"
    },
    {
      "id": "c5e3fa3d322d99aa95bdb5464b553dc8",
      "name": "Mark Schiffer",
      "email": "mark_schiffer_11372@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "c4f3674f327d7d899771589f76b39861",
      "name": "Larry Shemen",
      "email": "larry_shemen_11432@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "136-20 38th Ave",
      "zip": "11432"
    },
    {
      "id": "88ff507142a827a7bdc4d59d1c4b8605",
      "name": "Adam Tonis",
      "email": "adam_tonis_11355@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "201 East 69th St",
      "zip": "11355"
    },
    {
      "id": "7312c965ac9ef00c5ae23c200fe64428",
      "name": "Jose Vargas",
      "email": "jose_vargas_10016@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "302 Broadway",
      "zip": "10016"
    },
    {
      "id": "7083acfbc2c20bf9d433eb42c73cdfd4",
      "name": "Limeng Wang",
      "email": "limeng_wang_10458@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "2869 Grand Concourse Avenue Ste. 1",
      "zip": "10458"
    },
    {
      "id": "dd6a3cdf5b7c1395f6c9c48281d651aa",
      "name": "Yaacov Weiss",
      "email": "yaacov_weiss_11237@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "370 9th Street",
      "zip": "11237"
    },
    {
      "id": "ce655a35c5b531cb02b8eb251c1e83e4",
      "name": "Yan Wolfson",
      "email": "yan_wolfson_11208@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "432 Bedford Avenue",
      "zip": "11208"
    },
    {
      "id": "593ff1208266b313090b2b2e32f4d7f1",
      "name": "Timothy Wong",
      "email": "timothy_wong_11374@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "\"43-70 Kissena Blvd, 1L\"",
      "zip": "11374"
    },
    {
      "id": "f552d8fe58fca64bf726c710c26af338",
      "name": "Raymond Yung",
      "email": "raymond_yung_11218@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "\"350 Ocean Ave, 1B\"",
      "zip": "11218"
    },
    {
      "id": "98971c5654d1813d5aec6f36bbe40f3a",
      "name": "David Brick",
      "email": "david_brick_10010@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "13a39c510f3a1597112e7c57daec545a",
      "name": "Emily Jackness",
      "email": "emily_jackness_11209@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "\"134-21 Maple Ave, Ground floor\"",
      "zip": "11209"
    },
    {
      "id": "14423308e6f9ca69832e2a79861e2702",
      "name": "Matthew Martinez",
      "email": "matthew_martinez_11219@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "753 Classon Avenue Suite LJ",
      "zip": "11219"
    },
    {
      "id": "6d768604fc0a1e5e30b95a853fd13c37",
      "name": "Anita Ahuja",
      "email": "anita_ahuja_10021@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "cb9d4c451e842e13e680fb86855ecb76",
      "name": "Jose Aponte",
      "email": "jose_aponte_10467@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "5b6d19ea43ff15559183b0a2c0494fb5",
      "name": "Steve T. Ayanruoh",
      "email": "steve_t._ayanruoh_11373@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "3747-77th St",
      "zip": "11373"
    },
    {
      "id": "bc3c17b837cde079f6adc40e68fd56f3",
      "name": "Maria Barbery",
      "email": "maria_barbery_11691@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "4d4f181aedc1e74524903a99b6d1fb8d",
      "name": "Ghizlane Benchekroune",
      "email": "ghizlane_benchekroune_10467@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "be38308aa5688f4c5ce00f2b53aeb474",
      "name": "Haydee Blanca",
      "email": "haydee_blanca_11230@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "1103 Cortelyou Road",
      "zip": "11230"
    },
    {
      "id": "cb31cfe08fac03d85eab4f21ece1f35c",
      "name": "Yadiera Brown",
      "email": "yadiera_brown_11422@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "37-33 77th Street",
      "zip": "11422"
    },
    {
      "id": "08470d773afff45e1f5791d53650d481",
      "name": "Rafael Bueno",
      "email": "rafael_bueno_10457@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "2dba099a3eb857ddb9d55c13a4c224f8",
      "name": "Jerome Cariaso",
      "email": "jerome_cariaso_10030@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "e1d3526e8f19b69b3e7a6f18e30414b6",
      "name": "Dilia Castanos",
      "email": "dilia_castanos_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "745 Nostrand Avenue",
      "zip": "11220"
    },
    {
      "id": "8ef790af763658b832b59a1fa00979e4",
      "name": "Yuderqui Checo",
      "email": "yuderqui_checo_10455@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "1610 WILLIAMSBRIDGE RD",
      "zip": "10455"
    },
    {
      "id": "e9e115b1f05c26895ee4fea0f5fc71fb",
      "name": "Eileen Chen",
      "email": "eileen_chen_10453@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "1624 University Avenue",
      "zip": "10453"
    },
    {
      "id": "33f16ab3969fba8d510e2895329ee8bb",
      "name": "Karen Chiu",
      "email": "karen_chiu_10031@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "95 Seaman Ave",
      "zip": "10031"
    },
    {
      "id": "e0a0a21b0ce25348633726a89eb4867b",
      "name": "Christina Chou",
      "email": "christina_chou_10458@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "a21458d87b0714110c8aaa63001a3b31",
      "name": "Bernadette Clement",
      "email": "bernadette_clement_10021@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "6dbb4c882fdb0100703a0c2e23071a96",
      "name": "Caroline Coccado",
      "email": "caroline_coccado_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "247 Grand St",
      "zip": "11220"
    },
    {
      "id": "02b644c8667da6cbd501c7be5cfa8239",
      "name": "Caroline Collado",
      "email": "caroline_collado_11221@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "222 Hancock St",
      "zip": "11221"
    },
    {
      "id": "3cdb594c6919567b754b3df30b2460b1",
      "name": "\"Flor, De La Cadena\"",
      "email": "\"flor,_de_la_cadena_11210@gmail.com\"",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "4117545c703c2306f3c1a004305bd16f",
      "name": "Ydelfonso Decoo",
      "email": "ydelfonso_decoo_10013@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "c9eeb8e96fe7cd6295a39f4fd8ed6046",
      "name": "Maximo D'Oleo",
      "email": "maximo_d'oleo_11215@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "\"2310 65th Street, 2nd floor\"",
      "zip": "11215"
    },
    {
      "id": "9e635b05740f7e068555c6f5e725f13e",
      "name": "Sara Donnelly",
      "email": "sara_donnelly_11219@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "\"763 56th Street , 1st floor\"",
      "zip": "11219"
    },
    {
      "id": "8d6ba12b407c0aab996257edd07201a1",
      "name": "Susan Dunn",
      "email": "susan_dunn_11233@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "295 Ralph Avenue",
      "zip": "11233"
    },
    {
      "id": "021b9dce4e83c1f8ca953dbfe948ffad",
      "name": "MeeYee Yolanda Eng",
      "email": "meeyee_yolanda_eng_11203@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "795172103f7fe7d3f64acf643a37d0a5",
      "name": "Yvonne Essandoh",
      "email": "yvonne_essandoh_10453@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "1624 University Avenue",
      "zip": "10453"
    },
    {
      "id": "ff6f151bbece0177df39d288c8606e67",
      "name": "Ramon Ferrand",
      "email": "ramon_ferrand_11354@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "41-60 Main St. #205B",
      "zip": "11354"
    },
    {
      "id": "53360141a85bc7b51b568fbf9fd5c37d",
      "name": "Rosa Gamundi-Joaquin",
      "email": "rosa_gamundi-joaquin_11219@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "1125 FULTON STREET 3RD FLOOR",
      "zip": "11219"
    },
    {
      "id": "830a4b4abae229abfb0fc01603f68d56",
      "name": "Lidia Garcia",
      "email": "lidia_garcia_11356@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "685106ff5ec97973e8922261c43f45b2",
      "name": "Lidia Garcia",
      "email": "lidia_garcia_10013@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "18 E Broadway",
      "zip": "10013"
    },
    {
      "id": "988da29d490dd69c1f6235cc3e40f12e",
      "name": "Marie Garnes",
      "email": "marie_garnes_10021@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "108 E 96th St",
      "zip": "10021"
    },
    {
      "id": "c00f9cff292bc033afb123c0ec01ff1d",
      "name": "Charles Gordon",
      "email": "charles_gordon_11214@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "\"9920 4 Avenue, Suite 206\"",
      "zip": "11214"
    },
    {
      "id": "598a25ff1b69f7e95349a6b8df3aa234",
      "name": "Katherine Teets Grimm",
      "email": "katherine_teets_grimm_10016@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "1185 Park Ave",
      "zip": "10016"
    },
    {
      "id": "659864889d1d9cc98e9c0943d5d6c0f1",
      "name": "Gunther Groning",
      "email": "gunther_groning_10033@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "333 w. 51st street",
      "zip": "10033"
    },
    {
      "id": "6a58055e3154c286e66c19e961a95c36",
      "name": "Priyanka Gupta",
      "email": "priyanka_gupta_11379@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "e93fdf734c0304715ddb3a35a46b16f5",
      "name": "Muhammad Haque",
      "email": "muhammad_haque_11042@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "66 38 FOREST AVENUE",
      "zip": "11042"
    },
    {
      "id": "8ec61731aa49dd20df2e080443f6bbf1",
      "name": "Judy Honig",
      "email": "judy_honig_11209@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "1b5529624fd13473e71fed4e2d8c97e3",
      "name": "Jose Jerez",
      "email": "jose_jerez_11354@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "41-60 Main St. #205B",
      "zip": "11354"
    },
    {
      "id": "7454933fbcfcfba0cbcd94b10578b495",
      "name": "Daniel Korin",
      "email": "daniel_korin_11432@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "40-08 Forley Street",
      "zip": "11432"
    },
    {
      "id": "fe01118caace6d3d2ab3edb2cc98b382",
      "name": "Yick Moon Lee",
      "email": "yick_moon_lee_10033@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "\"254 Canal street, Room 2006\"",
      "zip": "10033"
    },
    {
      "id": "3fa8fe0f3d13bce99a36daff18495087",
      "name": "Ka Li",
      "email": "ka_li_11372@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "83-10 Queens Blvd",
      "zip": "11372"
    },
    {
      "id": "2fbc6f74c1af12ca13f273047ff2477a",
      "name": "Austin Lu",
      "email": "austin_lu_10016@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "435 Fort Washington Ave #1H",
      "zip": "10016"
    },
    {
      "id": "bf2932d252a388a551fb1f80ee4d8211",
      "name": "Rogelio Lucas",
      "email": "rogelio_lucas_10461@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "\"1262 Boston Road, suite 2\"",
      "zip": "10461"
    },
    {
      "id": "688426f1009197e2adf9ec9ab091bd1f",
      "name": "Beth Lustgarten",
      "email": "beth_lustgarten_11224@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "83472b3c4de4baa0eb4a65c49bdbabe0",
      "name": "Fievre Garnes Marie",
      "email": "fievre_garnes_marie_10463@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "4626 White Plains Rd",
      "zip": "10463"
    },
    {
      "id": "9a0839d795bdd74622839c849222b8ee",
      "name": "Alicia Massop-Flowers",
      "email": "alicia_massop-flowers_11204@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "650 5th Avenue",
      "zip": "11204"
    },
    {
      "id": "bc0c974346fc8d9cc092f81db3b805b8",
      "name": "Kalpana Master",
      "email": "kalpana_master_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "37-57 91st Street",
      "zip": "11354"
    },
    {
      "id": "bb1db69f05ba53489406abce6a7cd118",
      "name": "Melina Mejia",
      "email": "melina_mejia_11420@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "72-35 112th St",
      "zip": "11420"
    },
    {
      "id": "113839b06a5e39cad405f79373109a68",
      "name": "Gang Meng",
      "email": "gang_meng_11230@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "\"86 East 49 st , suite G\"",
      "zip": "11230"
    },
    {
      "id": "4443a0e93dd236a79ef3cea6b8296547",
      "name": "Blanche Mercedes",
      "email": "blanche_mercedes_10018@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "360 1st Avenue Apartment MG",
      "zip": "10018"
    },
    {
      "id": "dd916372192af031bbd1db6a5726c327",
      "name": "Betty Mercedes",
      "email": "betty_mercedes_11354@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "209 Beach 125st",
      "zip": "11354"
    },
    {
      "id": "4a43bc774cfb40d060fb3550ab41c033",
      "name": "Betty Mercedes",
      "email": "betty_mercedes_10031@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "7a03d9602f2e8c60cadce3552e308293",
      "name": "Maria Molina",
      "email": "maria_molina_10013@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "20 Park Avenue",
      "zip": "10013"
    },
    {
      "id": "c71a598cf4934def41564c5839b75b33",
      "name": "Roberto Moran",
      "email": "roberto_moran_11236@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "f42d84ffbebdb15440e0149cbc7190a3",
      "name": "Edward A. Nichols",
      "email": "edward_a._nichols_10466@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1162 Edison Ave",
      "zip": "10466"
    },
    {
      "id": "29e8cdfb4a9866bd5bdd47fdaea8178b",
      "name": "Christiana Nichols",
      "email": "christiana_nichols_11368@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "4053 75th Street",
      "zip": "11368"
    },
    {
      "id": "12d6ac9bc08d258334ee0b31944000d4",
      "name": "Anita Ong Hui",
      "email": "anita_ong_hui_10021@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "5055942a31ea75595d2e104334290397",
      "name": "Luis Ortega",
      "email": "luis_ortega_11207@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "10406 Flatlands Avenue",
      "zip": "11207"
    },
    {
      "id": "e1d960bbc000679bc797b2c07ac3d2f4",
      "name": "Marrissa Pelletier",
      "email": "marrissa_pelletier_11210@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "762 59th Street",
      "zip": "11210"
    },
    {
      "id": "305fa68649b5fcdebf28475de8cd289c",
      "name": "Marissa Pelletier",
      "email": "marissa_pelletier_11204@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "\"34 PLAZA STREET, SUITE104\"",
      "zip": "11204"
    },
    {
      "id": "db75f4da8a63ca0f325d4876e5381b7a",
      "name": "Clotilde Pena",
      "email": "clotilde_pena_10065@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "\"86 Bowery Street, 6F\"",
      "zip": "10065"
    },
    {
      "id": "829fcdce46b1505ae51c3020cef73cbe",
      "name": "Andres Pereira",
      "email": "andres_pereira_11220@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "ecdc550a2280a2ce548b443b1d137f7c",
      "name": "Jose Perez",
      "email": "jose_perez_10028@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "58 E. 116th St",
      "zip": "10028"
    },
    {
      "id": "e8e5b9d33be7d99c6fb03d6f14e0f550",
      "name": "Jose Perez",
      "email": "jose_perez_10305@gmail.com",
      "specilization": "gynecologist",
      "borough": "New York",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "65a5d1a5d587c525d9bf6b6236d139c0",
      "name": "Christopher Phang",
      "email": "christopher_phang_11354@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "451134ff3bf2ac33faf942ab9449ea99",
      "name": "Reucar Quijada",
      "email": "reucar_quijada_11211@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "5 Avenue I",
      "zip": "11211"
    },
    {
      "id": "cd535f6261126f5a97cda2eb549844c9",
      "name": "Carol Roye",
      "email": "carol_roye_11356@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "01f8aaf364bd522cc2ba7385a3f35917",
      "name": "Carmen Runiga-Kartachou",
      "email": "carmen_runiga-kartachou_11377@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "-342 Beach 54th Street",
      "zip": "11377"
    },
    {
      "id": "6fb88829d5668c34769ead9d7b5e65a3",
      "name": "Gunjeet Sahni",
      "email": "gunjeet_sahni_11418@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "8656 105th Street",
      "zip": "11418"
    },
    {
      "id": "81866276d9215ec9c2ad2e5dafaee751",
      "name": "Zuheir Said",
      "email": "zuheir_said_11372@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "76-01 113 Street",
      "zip": "11372"
    },
    {
      "id": "a75ab0fa01322971b136f103d4a4f38b",
      "name": "Jesika Shah",
      "email": "jesika_shah_11203@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "4506 8th Avenue",
      "zip": "11203"
    },
    {
      "id": "6f20e408fc1b6fbeff7139f060d07e27",
      "name": "Alyssa Siegel",
      "email": "alyssa_siegel_11208@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "432 Bedford Avenue",
      "zip": "11208"
    },
    {
      "id": "e3bbd3f98d78e8f06f30d3e43dced3d0",
      "name": "Ashok Sinha",
      "email": "ashok_sinha_11203@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "1fb73df0e3d80c71669c6cdad35eedf9",
      "name": "Rosalinda Spatoliatore",
      "email": "rosalinda_spatoliatore_11435@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "87 08 Justice Avenue",
      "zip": "11435"
    },
    {
      "id": "6f8ee00b875044dc66268ea0b87b1376",
      "name": "Chyne C. Tan",
      "email": "chyne_c._tan_10453@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "fa5eedfb65c729fa3b33031b07da5996",
      "name": "Juan Tapia-Mendoza",
      "email": "juan_tapia-mendoza_11203@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "065fda44d8156f2f94c22eaa34f98df9",
      "name": "Arsenio Miguel Tio",
      "email": "arsenio_miguel_tio_10013@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "c8ebcdfb047e95ec6aa296b899680641",
      "name": "Marino Torres",
      "email": "marino_torres_11228@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "242 DeKalb Ave",
      "zip": "11228"
    },
    {
      "id": "929bac5eae64c632c80ba5ca64c518c9",
      "name": "Tumika Williams Wilson",
      "email": "tumika_williams_wilson_10014@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "470 Malcolm X Boulevard",
      "zip": "10014"
    },
    {
      "id": "9b3dc7cf45010dd948f0d3f87a322e70",
      "name": "Theresa Wilson",
      "email": "theresa_wilson_11237@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "86 East 49th Street",
      "zip": "11237"
    },
    {
      "id": "a1be7bc1329eff05e17673fcb5de8eb8",
      "name": "Diana Wynt",
      "email": "diana_wynt_10304@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "800 manor road suite 4",
      "zip": "10304"
    },
    {
      "id": "0ff0353c7ac7b14e202067ac3227cc98",
      "name": "Li-Min Yang",
      "email": "li-min_yang_10032@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "a5237a1e698666ff891c032f0a78cdea",
      "name": "Eddie Yang",
      "email": "eddie_yang_11372@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "4028 82ND STREET",
      "zip": "11372"
    },
    {
      "id": "ce8bf2f96e7f219cd0f546fb63e81617",
      "name": "Sharon Zheng",
      "email": "sharon_zheng_10472@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "75 WEST 190 ST",
      "zip": "10472"
    },
    {
      "id": "942a38f3f0414ad9ec1c9229330bc021",
      "name": "Jean Zheng",
      "email": "jean_zheng_11211@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "461d5a3fdb35085aad15e32abcb03324",
      "name": "Ching Sum Leung",
      "email": "ching_sum_leung_11211@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "856 Dekalb Avenue",
      "zip": "11211"
    },
    {
      "id": "3d21d27468aeea202152a221c4126e39",
      "name": "Ethan Ciment",
      "email": "ethan_ciment_10455@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "1610 WILLIAMSBRIDGE RD",
      "zip": "10455"
    },
    {
      "id": "3008c1e6a1aaec75fcb0218b58747d84",
      "name": "Jose de Leon",
      "email": "jose_de_leon_11372@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "\"87-81, 169th Street\"",
      "zip": "11372"
    },
    {
      "id": "9b21ce7b542ac34c0cfb1fc2c632668e",
      "name": "Ivan Herstik",
      "email": "ivan_herstik_10044@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "958e1f92b261afe304c6b58eb1843225",
      "name": "Natalia Peters",
      "email": "natalia_peters_10458@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "37-52 82nd Street 2nd Floor",
      "zip": "10458"
    },
    {
      "id": "7385fc6e89ebbdd3fe250c190e4a87eb",
      "name": "Nedjie Pierre",
      "email": "nedjie_pierre_10011@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "d51d17747fd12e6fe8322382b372cfb0",
      "name": "Dorene Soo-Hoo",
      "email": "dorene_soo-hoo_10013@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "a59d72cb4249604260038daec32f0883",
      "name": "Lise Vincent",
      "email": "lise_vincent_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "fb0e7c0834c6622f4ff45b09ef738c9f",
      "name": "Sylvia Cotto",
      "email": "sylvia_cotto_11419@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "253-02 147th Ave",
      "zip": "11419"
    },
    {
      "id": "4346b9bc6d0b4baf1bb9156a5e09fe8d",
      "name": "Maria Pirraglia",
      "email": "maria_pirraglia_11377@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "\"136-20 38th Avenue, Suite 6C\"",
      "zip": "11377"
    },
    {
      "id": "933d56311800d5645ff48fa8a2657275",
      "name": "Delys St. Hill",
      "email": "delys_st._hill_11356@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "5ee8225819f2ba5e3fdcc87bc228d99d",
      "name": "John Munoz",
      "email": "john_munoz_11355@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "63-118 Woodhaven Blvd",
      "zip": "11355"
    },
    {
      "id": "b85fca453bd0522d601bbab91018bcce",
      "name": "Gerard Lombardo",
      "email": "gerard_lombardo_10075@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "185 West End Ave",
      "zip": "10075"
    },
    {
      "id": "27847ff91f2d4610b5bb747064a6eab7",
      "name": "Rodolfo Miranda",
      "email": "rodolfo_miranda_11354@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "50 10 SKILLMAN AVE",
      "zip": "11354"
    },
    {
      "id": "9de85f6512a8b0c97af5f4f56f48f563",
      "name": "Todd Schlifstein",
      "email": "todd_schlifstein_11237@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "830 Marcy Avenue",
      "zip": "11237"
    },
    {
      "id": "68fd7a55d7e665e90ac95117d9e8b8ca",
      "name": "James Pacholka",
      "email": "james_pacholka_10019@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "108 East 96th Street",
      "zip": "10019"
    },
    {
      "id": "96175fef99134254ba74021e5beccf7f",
      "name": "Douglas Birns",
      "email": "douglas_birns_11374@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "25-92 steinway street",
      "zip": "11374"
    },
    {
      "id": "80b75b08deb68f70750a34bf08b36cdd",
      "name": "George Klein",
      "email": "george_klein_10453@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "2326decc4525be110eac56f251bb4811",
      "name": "Mayra Mahadin",
      "email": "mayra_mahadin_11355@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "ce57056962bd82799cf6c317a87958e6",
      "name": "Chinta Chiu",
      "email": "chinta_chiu_10027@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "353 Ft. Washington Ave. Ste 1F",
      "zip": "10027"
    },
    {
      "id": "eb05a33f1e3b7188e5b7c6fa7ec8f49c",
      "name": "CHARLES HWU",
      "email": "charles_hwu_10312@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "df030a3d80e2e8b5ff8f510d3698e079",
      "name": "Lili Ren",
      "email": "lili_ren_10032@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "\"303 9th Avenue, Room 140\"",
      "zip": "10032"
    },
    {
      "id": "f420e131c0afb738f90e9bfe8a4b1aa4",
      "name": "Huifang Xiao",
      "email": "huifang_xiao_11210@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "264 1st Street",
      "zip": "11210"
    },
    {
      "id": "6427b040f139cb5e3ad0a2438422b81e",
      "name": "Rong Xu",
      "email": "rong_xu_11230@gmail.com",
      "specilization": "cardiologist",
      "borough": "Cedarhurst",
      "address": "585 Knickerbocker Avenue",
      "zip": "11230"
    },
    {
      "id": "8057d25f5a4f47498170b6959cf78b72",
      "name": "Sam Weissman",
      "email": "sam_weissman_11379@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "d25a7f203ee8ffeed90afe6515582f58",
      "name": "Norman Klein",
      "email": "norman_klein_10467@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "3131 Grand Concourse Site 113",
      "zip": "10467"
    },
    {
      "id": "b294812a73e3592b4ffa2174f443bdfd",
      "name": "Nagi Bustros",
      "email": "nagi_bustros_11373@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "13176 Laurelton Parkway",
      "zip": "11373"
    },
    {
      "id": "702da2410c19437bcf6a501ff00d347f",
      "name": "Leonid Chernov",
      "email": "leonid_chernov_10013@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "\"67 Irving Place, 5th Floor\"",
      "zip": "10013"
    },
    {
      "id": "1ce098462ac52e7e705724ebebf73bb4",
      "name": "Atul Chokshi",
      "email": "atul_chokshi_10010@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "160 East 32nd St",
      "zip": "10010"
    },
    {
      "id": "2ef1f2b13c3316479d47b61f33cbf61e",
      "name": "George Fernaine",
      "email": "george_fernaine_10034@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "501 Main Street",
      "zip": "10034"
    },
    {
      "id": "13e11c7af83bd66f26241c485f1afa8a",
      "name": "Antoine Fernaine",
      "email": "antoine_fernaine_11210@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "217 Ovington Avenue",
      "zip": "11210"
    },
    {
      "id": "04beefe206ae7ac1422c9979d3bcebb9",
      "name": "Paul Lee",
      "email": "paul_lee_11354@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "13347 Sanford Ave.#C1F",
      "zip": "11354"
    },
    {
      "id": "ee042f8e7758b687e490ff13b7f167e7",
      "name": "Robert Vaccarino",
      "email": "robert_vaccarino_11355@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "201 East 69th St",
      "zip": "11355"
    },
    {
      "id": "4e46df80f2e0f1b5d637f5da3b74eb7c",
      "name": "Daniel Yadegar",
      "email": "daniel_yadegar_11354@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "fc4e9d6f9678689e55c637db30aca7ba",
      "name": "Zewge Deribe",
      "email": "zewge_deribe_11217@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "2083 East 65 Street",
      "zip": "11217"
    },
    {
      "id": "4c6266fefcb6cd450a3458ba7d8fa8b3",
      "name": "Maurice Alwaya",
      "email": "maurice_alwaya_11238@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "60 Plaza St E # E",
      "zip": "11238"
    },
    {
      "id": "9bb887fb1a5926db5c8ae0f49518c320",
      "name": "Jacquelin Belamy",
      "email": "jacquelin_belamy_10467@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "170 W.233Rd Street",
      "zip": "10467"
    },
    {
      "id": "ab84205500f820fa0d07ad95bb835038",
      "name": "Albert A. Benchabbat",
      "email": "albert_a._benchabbat_10461@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "\"1262 Boston Road, suite 2\"",
      "zip": "10461"
    },
    {
      "id": "18eb5841890c996d92d313f41a889b31",
      "name": "Leonid Bukhman",
      "email": "leonid_bukhman_11372@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "\"87-81, 169th Street\"",
      "zip": "11372"
    },
    {
      "id": "7473cf054c186d186a7b6fdf1d5b14e1",
      "name": "Sara Buros",
      "email": "sara_buros_11691@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "4bac50640fd363dc8dab2aa4be0d3684",
      "name": "Joseph Caruana",
      "email": "joseph_caruana_11355@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "37-11 88th Street",
      "zip": "11355"
    },
    {
      "id": "c0f41eb7cecf215e82478ba915ab2783",
      "name": "Carl Casimir",
      "email": "carl_casimir_11221@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "231 SOUTH 3RD STREET",
      "zip": "11221"
    },
    {
      "id": "dc44db0c59db9634f309fb4f9a8475ef",
      "name": "Jonathan MT Chang",
      "email": "jonathan_mt_chang_10025@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "353 Fort Washington Avenue #1E",
      "zip": "10025"
    },
    {
      "id": "9af2657ba78caaf41b63165127a8fce8",
      "name": "Junaid Chohan",
      "email": "junaid_chohan_11367@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "159-05 92nd St.",
      "zip": "11367"
    },
    {
      "id": "a6ce8805a528c1bdee894c44d96b5898",
      "name": "Rick Chou",
      "email": "rick_chou_11204@gmail.com",
      "specilization": "toxicologists",
      "borough": "Jackson Heights",
      "address": "124 East 43rd Street",
      "zip": "11204"
    },
    {
      "id": "0ac8e0ecfd0e78448d2c3b5a4e74a6ab",
      "name": "David Cotos-Mejia",
      "email": "david_cotos-mejia_10034@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "\"200 Cabrini Boulevard, Suite 17\"",
      "zip": "10034"
    },
    {
      "id": "da7684381f8a2600d3c5331d666afe3d",
      "name": "Cathy Delerme-Pagan",
      "email": "cathy_delerme-pagan_10453@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "18bc9fec3ac3b8d710be3033f0d8d5f1",
      "name": "Nadia Duvilaire",
      "email": "nadia_duvilaire_11372@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "40-35 95th Street",
      "zip": "11372"
    },
    {
      "id": "1740e776831349e8ee9adaacb9b32f1b",
      "name": "Maria Evola",
      "email": "maria_evola_10033@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "400 Broadway",
      "zip": "10033"
    },
    {
      "id": "94f04838b7d8373e4ec1f91402a077fd",
      "name": "Charity Fancis-Munson",
      "email": "charity_fancis-munson_11355@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "0b171ea5c68a4b45e45cc9ef147ace25",
      "name": "Robert Feldman",
      "email": "robert_feldman_10010@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "160 East 32nd St",
      "zip": "10010"
    },
    {
      "id": "13f583cc869822acacfc31afb181d517",
      "name": "Simon Fensterszaub",
      "email": "simon_fensterszaub_10044@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "f7cf51b3fa6ea554185753186237baab",
      "name": "Charles Francis",
      "email": "charles_francis_11230@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "2119 West 6th Street",
      "zip": "11230"
    },
    {
      "id": "74b76ada9229d32807526cfbaa6b5536",
      "name": "Irina Fuchs",
      "email": "irina_fuchs_10032@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "\"17 Hamilton Place, 2nd Floor\"",
      "zip": "10032"
    },
    {
      "id": "0e4720c0ef33bb9f64414e8c3a5e5300",
      "name": "Jayant Gandhi",
      "email": "jayant_gandhi_11213@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "1203 Avenue J",
      "zip": "11213"
    },
    {
      "id": "2ca04fe3a60d8cad3d022cc24b61289b",
      "name": "Shiva Golshan",
      "email": "shiva_golshan_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "19 Hamilton Place",
      "zip": "10013"
    },
    {
      "id": "056653ca53d0dc5f87bad856776fad2d",
      "name": "Shaikh M. Hasan",
      "email": "shaikh_m._hasan_10468@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "444 Willis Avenue",
      "zip": "10468"
    },
    {
      "id": "4a71fb2cdf32a3880690ee2d99416254",
      "name": "Fu Fu He",
      "email": "fu_fu_he_10030@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "6485a8de39f02ae068b7ac5ea7cf719f",
      "name": "David Hosten",
      "email": "david_hosten_10011@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "115 Central Park West",
      "zip": "10011"
    },
    {
      "id": "09952d641a98ad59ff56e9218929f198",
      "name": "Syed Z. Hussaini",
      "email": "syed_z._hussaini_11206@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "741 New Lots Avenue",
      "zip": "11206"
    },
    {
      "id": "aaf3b9dfe2e85e09ca0603ac8b97608d",
      "name": "Heuscent James",
      "email": "heuscent_james_11209@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "\"134-21 Maple Ave, Ground floor\"",
      "zip": "11209"
    },
    {
      "id": "1bfd9074b3d11f00687e63e573a40ffc",
      "name": "Ramakrishna Karibandi",
      "email": "ramakrishna_karibandi_10453@gmail.com",
      "specilization": "allergologists",
      "borough": "Bronx",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "9c789c07c5f1ef6503dce2467e3593ec",
      "name": "Gulam Khan",
      "email": "gulam_khan_10021@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "889e1089f23e54641f0299feeeab46dc",
      "name": "Monic Kim",
      "email": "monic_kim_11210@gmail.com",
      "specilization": "diabetologists",
      "borough": "New York",
      "address": "762 59th Street",
      "zip": "11210"
    },
    {
      "id": "401463e7d3b57815173228ff4bb4ecd4",
      "name": "Galina Kletsman",
      "email": "galina_kletsman_10304@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "800 manor road suite 4",
      "zip": "10304"
    },
    {
      "id": "666b5b6afb6fbed4b9bed422c38cb9cd",
      "name": "Dov Landa",
      "email": "dov_landa_10032@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "927e18eb9fba5f976922fc7c946b30cf",
      "name": "Michael Lavianlivi",
      "email": "michael_lavianlivi_11375@gmail.com",
      "specilization": "toxicologists",
      "borough": "Jackson Heights",
      "address": "6506 Roosevelt Ave",
      "zip": "11375"
    },
    {
      "id": "21ebc3f70f5ae593cb59f8dbf82da5a6",
      "name": "John F. Lazzara",
      "email": "john_f._lazzara_11692@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "13710 FRANKLIN AVE",
      "zip": "11692"
    },
    {
      "id": "862bd2bcead5df1dfbd7b00225454f2f",
      "name": "France Lee",
      "email": "france_lee_11238@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "60 Plaza St E # E",
      "zip": "11238"
    },
    {
      "id": "6cd882e0aaa4667f9bd8cdeb950e0d6a",
      "name": "Shirley Li",
      "email": "shirley_li_10021@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "\"400 Broadway, 4th Floor\"",
      "zip": "10021"
    },
    {
      "id": "f3ff3d40c7d3a1aa4aed4e313997bb90",
      "name": "Shen-Han Lin",
      "email": "shen-han_lin_11237@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "370 9th Street",
      "zip": "11237"
    },
    {
      "id": "878dad41c424e27e83d830804cb39868",
      "name": "April Lowry",
      "email": "april_lowry_11103@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "43-48 Colden St.",
      "zip": "11103"
    },
    {
      "id": "255554d0024d6e5784412b6ae56ed918",
      "name": "Mario Manna",
      "email": "mario_manna_11354@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "aa8b6302181d7589ac831ca425bafcf3",
      "name": "Jacob Meltzer",
      "email": "jacob_meltzer_10025@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "353 Fort Washington Avenue #1E",
      "zip": "10025"
    },
    {
      "id": "cc9bd4a8df644c3ef85bda59dd57c8c9",
      "name": "Gabor Menczelesz",
      "email": "gabor_menczelesz_11377@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "cb23642f19588fe92f2686160dabc904",
      "name": "Wesner Moise",
      "email": "wesner_moise_10472@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "1211 White Plains Rd",
      "zip": "10472"
    },
    {
      "id": "08e31d4bb340befaf9f1264bd5702a84",
      "name": "George Moskowitz",
      "email": "george_moskowitz_11233@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "295 Ralph Avenue",
      "zip": "11233"
    },
    {
      "id": "ac68990c2af6db82fb02037fd5dbc0fa",
      "name": "Marjorie Ordene",
      "email": "marjorie_ordene_10461@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "3017 Colden Avenue",
      "zip": "10461"
    },
    {
      "id": "c43a636a39c25fbe7d8416cae58fa565",
      "name": "Rushita Patel",
      "email": "rushita_patel_10305@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "c804c79c78c13254ddf847109d5be0dc",
      "name": "Rushita Patel",
      "email": "rushita_patel_11373@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "0f2b200227f3af9f9eafbabf8f82c22b",
      "name": "Claude Pericles",
      "email": "claude_pericles_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "8e21990cddfb945a95da87568d2e6ddb",
      "name": "BREDY PIERRE-LOUIS MD",
      "email": "bredy_pierre-louis_md_10012@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "245 East 35th Street",
      "zip": "10012"
    },
    {
      "id": "009a2903667206bfcc089d1423a1cc29",
      "name": "Anthony G. Purpura",
      "email": "anthony_g._purpura_11208@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "514 Fifth Street",
      "zip": "11208"
    },
    {
      "id": "9363388d0015fae8c428eaf4cad152d9",
      "name": "Michael Raffinan",
      "email": "michael_raffinan_11203@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "2379 65th Street",
      "zip": "11203"
    },
    {
      "id": "e1cbaa493bde3371f298c3c05c4554d6",
      "name": "Lalitha Reddy",
      "email": "lalitha_reddy_10030@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "0f54ee2b92eedff29b53b4978b1a2851",
      "name": "Michael Sabido",
      "email": "michael_sabido_10013@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "9968138c9e2a1fde3b04d5f2f32054d4",
      "name": "Elizabeth Schwartzburt",
      "email": "elizabeth_schwartzburt_11374@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "25-92 steinway street",
      "zip": "11374"
    },
    {
      "id": "0e2286dff19d9a4ce10f1ce820318178",
      "name": "Ilan Semandov",
      "email": "ilan_semandov_11418@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "86-04 117th. Street",
      "zip": "11418"
    },
    {
      "id": "5c07a071b1f156d198c6fe382efdf195",
      "name": "Gabrielle Severe",
      "email": "gabrielle_severe_10016@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "140 Wadsworth Avenue",
      "zip": "10016"
    },
    {
      "id": "c45df7e07f7733a926575653da44e3fa",
      "name": "Daniel St-Pierre",
      "email": "daniel_st-pierre_11368@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "136-20 38th Ave Suite 6M",
      "zip": "11368"
    },
    {
      "id": "a5a9e28da521510cd7e3af3890458295",
      "name": "Deqing Sun",
      "email": "deqing_sun_10016@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "\"571 Academy Street, Apt. GLE\"",
      "zip": "10016"
    },
    {
      "id": "21693720a40c810e33c5095b1727d095",
      "name": "Rui Er Teng",
      "email": "rui_er_teng_11213@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "1729 E. 12th Street",
      "zip": "11213"
    },
    {
      "id": "51092a9413aea13f0c756766118e1a6d",
      "name": "Hui Er Teng",
      "email": "hui_er_teng_11420@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "104-14 113 ST",
      "zip": "11420"
    },
    {
      "id": "9bbf611e4f454a5dcb21c35c6030319a",
      "name": "David Treatman",
      "email": "david_treatman_10033@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "139 Centre St.",
      "zip": "10033"
    },
    {
      "id": "1b1acb0f18cd0c0cf39dea1d76895bb2",
      "name": "Olga Tseyko",
      "email": "olga_tseyko_10038@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "47 Sickles suite 1A",
      "zip": "10038"
    },
    {
      "id": "cc76c887e4255d92ef8dd10d01259bc6",
      "name": "Larisa Veksman",
      "email": "larisa_veksman_11373@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "\"92-11 35TH AVENUE, SUITE 1E\"",
      "zip": "11373"
    },
    {
      "id": "14683efb6fc46f3132b08cd4603e796a",
      "name": "Chaya Wald",
      "email": "chaya_wald_11216@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "6805 Fort Hamilton Parkway",
      "zip": "11216"
    },
    {
      "id": "9ca7245c1be162b6b9494d52c0320ca5",
      "name": "Wei Wang",
      "email": "wei_wang_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "856 Dekalb Avenue",
      "zip": "11211"
    },
    {
      "id": "7d224c3c532d417524ffc4e61e84a2a5",
      "name": "Kyi Win Yu",
      "email": "kyi_win_yu_11211@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "f760e7d09f518b186f52cc9bf83153dd",
      "name": "Benjamin Wu",
      "email": "benjamin_wu_11203@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "ffe7ef6413fc308abb361a7199981bec",
      "name": "Perminder Dhillon",
      "email": "perminder_dhillon_11373@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "\"213-02 Hillside Ave,\"",
      "zip": "11373"
    },
    {
      "id": "ac20f47a05a5dd50700cc61209c1efdb",
      "name": "Pei Ying Xiao",
      "email": "pei_ying_xiao_11103@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "110-16 Sutphin Ave",
      "zip": "11103"
    },
    {
      "id": "e6808af3999efc9414bb54b403ac7e6d",
      "name": "Genia Bekker",
      "email": "genia_bekker_11236@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "1353 49th Street",
      "zip": "11236"
    },
    {
      "id": "413a8f2026e2e142a4af3afdf4c453f5",
      "name": "Gardith Joseph",
      "email": "gardith_joseph_10028@gmail.com",
      "specilization": "surgeon",
      "borough": "Jackson Heights",
      "address": "58 E. 116th St",
      "zip": "10028"
    },
    {
      "id": "7c2e3f6dac2e71ccb96980f93cae916f",
      "name": "Mariyum Shakir",
      "email": "mariyum_shakir_10463@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "2bdfdd14b7b35b2feac8eed253b63d40",
      "name": "Zurab Abayev",
      "email": "zurab_abayev_11354@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "80-37 Broadway",
      "zip": "11354"
    },
    {
      "id": "63f90481a3c4a1fa01226b7a6c5d6e9c",
      "name": "Qaiser Abbas",
      "email": "qaiser_abbas_10040@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "9 East 63rd Street",
      "zip": "10040"
    },
    {
      "id": "7566640be8c6c02b7c26e3776e45bf27",
      "name": "Olusegun Adeonigbagbe",
      "email": "olusegun_adeonigbagbe_10021@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "785b030444951b019003d3b7fffa9b8a",
      "name": "Syed Ahmad",
      "email": "syed_ahmad_11373@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "58b47daf52172e7c1e5fef696ba404ca",
      "name": "Ijaz Ahmad",
      "email": "ijaz_ahmad_10458@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "1262 Boston Road Suite 1",
      "zip": "10458"
    },
    {
      "id": "9de3c61e55417b0b7ba8508b83fdc102",
      "name": "Ofem Ajah",
      "email": "ofem_ajah_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "9c0daa180beaac067a7d0cc88c42a5b1",
      "name": "Faisal Ali",
      "email": "faisal_ali_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "39-07 PRINCE ST. 6H",
      "zip": "11372"
    },
    {
      "id": "346f2c0155f26facda540ba24d3e0826",
      "name": "Deepak Amin",
      "email": "deepak_amin_11416@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "42-65 Kissena Blvd L4",
      "zip": "11416"
    },
    {
      "id": "f318c40e58aebe946fd99e6c426f9c00",
      "name": "Jacques Antoine",
      "email": "jacques_antoine_11354@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "112-03 Queens Blvd",
      "zip": "11354"
    },
    {
      "id": "d744f097c8d14ab3d0ddffa9b92d314a",
      "name": "Jack Apelbaum",
      "email": "jack_apelbaum_10019@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "166 5th Ave",
      "zip": "10019"
    },
    {
      "id": "9785e0bfb17476d52d8f52f84ced75a9",
      "name": "Kevin Armington",
      "email": "kevin_armington_11210@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "1742 East 13th Street",
      "zip": "11210"
    },
    {
      "id": "c724229d7cbe597799443a589e1152c3",
      "name": "Maha Awikeh",
      "email": "maha_awikeh_11220@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "1421 Carroll Street",
      "zip": "11220"
    },
    {
      "id": "49823a532757d5da167ab7d49e216d20",
      "name": "Emil Baccash",
      "email": "emil_baccash_11423@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "\"36-09 Main Street, Suite 8C\"",
      "zip": "11423"
    },
    {
      "id": "7f57cb5b4f04f75cdadfc3f5e7b34be4",
      "name": "Benjamin Barrah",
      "email": "benjamin_barrah_11423@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "136-30 MAPLE AVE",
      "zip": "11423"
    },
    {
      "id": "7a59863f02afbd76369a301641762440",
      "name": "Aline Benjamin",
      "email": "aline_benjamin_11219@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "1421 E 2ND ST",
      "zip": "11219"
    },
    {
      "id": "871c08906c0f71cc1b3ea3892e3107ba",
      "name": "Jeffrey Ben-Zvi",
      "email": "jeffrey_ben-zvi_11220@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "716 east 32nd st",
      "zip": "11220"
    },
    {
      "id": "ae693d2322da8a2805a5983bd5bedee8",
      "name": "Aaron Berger",
      "email": "aaron_berger_10013@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "1641 3rd Ave suite 27H",
      "zip": "10013"
    },
    {
      "id": "bf29784abf764fb8a9e0f2e0b22d8dd1",
      "name": "Arnold Berlin",
      "email": "arnold_berlin_10002@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "210 W 139th St",
      "zip": "10002"
    },
    {
      "id": "3d9a7f84e9a0a66f6f9500103c3ef75f",
      "name": "Andrew Black",
      "email": "andrew_black_11692@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "\"133-29 41st Rd, 2D\"",
      "zip": "11692"
    },
    {
      "id": "37e90fe201cb70800cb83fe98287fd96",
      "name": "Terry Blackett-Bonnett",
      "email": "terry_blackett-bonnett_11207@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "-9613 Flatlands Avenue",
      "zip": "11207"
    },
    {
      "id": "d3ab4fb4f3424ceea8fe9b22e70364d9",
      "name": "Terry Blackett-Bonnett",
      "email": "terry_blackett-bonnett_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "813c44c07f48db21c26fc97422d723fc",
      "name": "Wilner Bonhomme",
      "email": "wilner_bonhomme_11224@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "3616064f9785294a3f47c3e847abff80",
      "name": "Charles Brum",
      "email": "charles_brum_11385@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "141-49 70 Road",
      "zip": "11385"
    },
    {
      "id": "14344ac0197ee06c0629343f76e6be3c",
      "name": "Francois Brutus",
      "email": "francois_brutus_11209@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "\"1664 East 14th Street, Suite 501\"",
      "zip": "11209"
    },
    {
      "id": "0de11d4563fd0cacf4a5eac9c4df231d",
      "name": "Narayana Byagari",
      "email": "narayana_byagari_11103@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "87-08 JUSTICE AVE SUITE CX",
      "zip": "11103"
    },
    {
      "id": "a3da8c2479803f015b1e7ff1177723d2",
      "name": "Carmen Cardona",
      "email": "carmen_cardona_11211@gmail.com",
      "specilization": "gynecologist",
      "borough": "Queens",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "048f1899689b646ba02eaf3f7c0d271c",
      "name": "Robin Chan",
      "email": "robin_chan_11203@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "f9d1ba7767738cade4a70b3e27bc2e49",
      "name": "Judah Charnoff",
      "email": "judah_charnoff_10453@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Bronx",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "cd98684bb7da0fbc8cd45851e27c8e9b",
      "name": "Uzma Chatha",
      "email": "uzma_chatha_10032@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "5b5bab950a83f82acbab30a0d2e983ff",
      "name": "Khalid Chaughtai",
      "email": "khalid_chaughtai_11373@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "db179a20be12dcb5c764c7f5692705ea",
      "name": "Yanfeng Chen",
      "email": "yanfeng_chen_10021@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "f20ebbd6c0ffe331e885a4dd2cc6420c",
      "name": "Henry Chen",
      "email": "henry_chen_10033@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "470 Lenox Ave Suite 1F",
      "zip": "10033"
    },
    {
      "id": "5a77ee8bc0d9ff5806a6462d90048817",
      "name": "Ronnie Chiu",
      "email": "ronnie_chiu_11379@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "f2132200ba8269027c2917da3bd39d7c",
      "name": "Won S. Cho",
      "email": "won_s._cho_10031@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "1099002a63fbd322edbd59bc1d7b586d",
      "name": "Po Cheng Chu",
      "email": "po_cheng_chu_11355@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Flushing",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "549f63235bccc2b6f7c50749c3cc12ae",
      "name": "Roger Chung",
      "email": "roger_chung_11204@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "8306 13th Avenue",
      "zip": "11204"
    },
    {
      "id": "98fb32a4c0cd6b7462ee2f8dd6305676",
      "name": "Carmen Co",
      "email": "carmen_co_11368@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "5ded6a82e74123144e99805249ba7b71",
      "name": "Oleq Davie",
      "email": "oleq_davie_11373@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "4dc0d3b7f1322a664fb140a7e92787a4",
      "name": "Paul De Guzman",
      "email": "paul_de_guzman_11372@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "70-17 37 Avenue",
      "zip": "11372"
    },
    {
      "id": "962dd657f99ceb97f6c456334568b3c4",
      "name": "Salvatore Degliuomini",
      "email": "salvatore_degliuomini_11203@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "\"263, 7th Ave Suite 4D\"",
      "zip": "11203"
    },
    {
      "id": "254627ee9911f0c2a661f9e14cda2e19",
      "name": "Iftikhar Din",
      "email": "iftikhar_din_11373@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "131-06 Liberty Ave",
      "zip": "11373"
    },
    {
      "id": "95522463cbddb37673653e0dd0f450af",
      "name": "Eugene Dinkevich",
      "email": "eugene_dinkevich_10023@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "120 E. 36th Street",
      "zip": "10023"
    },
    {
      "id": "c22194eb1552f1b64a236f99b16be975",
      "name": "Muhammad Dogar",
      "email": "muhammad_dogar_10012@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "245 East 35th Street",
      "zip": "10012"
    },
    {
      "id": "15bf8165cd67032aa4b3d0d5ad125450",
      "name": "Howard Eisenstein",
      "email": "howard_eisenstein_11236@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "2a4de06559ef7bf3b145bccad107121b",
      "name": "Earl Ellis",
      "email": "earl_ellis_10451@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "2400 Davidson Avenue",
      "zip": "10451"
    },
    {
      "id": "ef64359ffca773acba105efc17c3dfc5",
      "name": "Chixin Fang",
      "email": "chixin_fang_11692@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "\"133-29 41st Rd, 2D\"",
      "zip": "11692"
    },
    {
      "id": "0de0bf4391a24c9d956fee7190caa010",
      "name": "Aysar B Fathallah-Mammo",
      "email": "aysar_b_fathallah-mammo_11435@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "234-32 Merrick Blvd.",
      "zip": "11435"
    },
    {
      "id": "862963d7cc99c144731c9afdc341158f",
      "name": "Edward T. Fitzpatrick",
      "email": "edward_t._fitzpatrick_11103@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "30-55 21st Street",
      "zip": "11103"
    },
    {
      "id": "d168333e07da9e8fb7cf8207c2e7e33f",
      "name": "Richard Francisco",
      "email": "richard_francisco_10458@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "\"1650 Selwyn Ave, 6th Floor\"",
      "zip": "10458"
    },
    {
      "id": "462db7ef429d98776e2533de3e500452",
      "name": "Thomas Fuchs",
      "email": "thomas_fuchs_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "9613 Flatlands Ave",
      "zip": "11220"
    },
    {
      "id": "f4e9139aa124c549cd0f4cb052f1f592",
      "name": "Joseph Gelbfish",
      "email": "joseph_gelbfish_11377@gmail.com",
      "specilization": "toxicologists",
      "borough": "Jackson Heights",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "6b71c3da35bf14ccc717ca48067b4ef5",
      "name": "Inna Gelfand",
      "email": "inna_gelfand_11103@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "1204 Beach 9 St",
      "zip": "11103"
    },
    {
      "id": "b380fd0b4af86e8119ca10b527fcabbe",
      "name": "Jacob George",
      "email": "jacob_george_10032@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "ad56fd10f126db80e2f3b1ca0f22b390",
      "name": "Jacob George",
      "email": "jacob_george_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "94-36 59th Avenue",
      "zip": "11372"
    },
    {
      "id": "890ba8865aaf80d920c6b6f311affc07",
      "name": "Chaudhry Ghumman",
      "email": "chaudhry_ghumman_10034@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "707 West 171st Suite A",
      "zip": "10034"
    },
    {
      "id": "4cc9f090b7b626a26ed0f2cb56ee3f45",
      "name": "Katherine Gold",
      "email": "katherine_gold_11204@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "\"34 PLAZA STREET, SUITE104\"",
      "zip": "11204"
    },
    {
      "id": "a50806ac9600cbfe9088cedd3711b47c",
      "name": "Stuart Goldwasser",
      "email": "stuart_goldwasser_11211@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "6bdc9ce59e7d8fee867b5f539d5ef1f6",
      "name": "Lin Gong",
      "email": "lin_gong_10040@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "629W 185st",
      "zip": "10040"
    },
    {
      "id": "84d319aca33139f2a4b17ddf19d6f247",
      "name": "Sylvia Gonzales",
      "email": "sylvia_gonzales_11420@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "\"185 Canal Street, 6th Floor\"",
      "zip": "11420"
    },
    {
      "id": "f35c485cd7376aafeab040576b8a2019",
      "name": "Patria Gonzalez",
      "email": "patria_gonzalez_11209@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "\"134-21 Maple Ave, Ground floor\"",
      "zip": "11209"
    },
    {
      "id": "3a2fdd6b9adcf77fe329889ebbfd9415",
      "name": "Robert Goodman",
      "email": "robert_goodman_11203@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "b32630bf8545b44546332a77889431e5",
      "name": "Inna Gordin",
      "email": "inna_gordin_10011@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "36 Seventh Avenue Suite 423",
      "zip": "10011"
    },
    {
      "id": "0f058749d946f7993fbd11dc3a265a08",
      "name": "Ravindra Goyal",
      "email": "ravindra_goyal_11355@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "a769baca019872aa77f6107607378295",
      "name": "Norman Greeley",
      "email": "norman_greeley_11373@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "\"97-77 Queens Blvd, Suite 900\"",
      "zip": "11373"
    },
    {
      "id": "80939e7f5a3566a80e4ae565ba29dce6",
      "name": "Sayera Haque",
      "email": "sayera_haque_11355@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "600dbf5fc6027bed11cb9bb4aebb25ce",
      "name": "Patricia Hart",
      "email": "patricia_hart_10453@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "8eeac2f7f8dac620db7eb617d1bd41e6",
      "name": "Syed Hassan",
      "email": "syed_hassan_10011@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "28b7a7f2e28406ce563c13475a1bb8f9",
      "name": "Wilfred Herard",
      "email": "wilfred_herard_10454@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "\"2426 Eastchester Rd, Suite 201\"",
      "zip": "10454"
    },
    {
      "id": "3f3c741bb7cf5e9b9afa9164343638fb",
      "name": "Andres Hernandez-Abreu",
      "email": "andres_hernandez-abreu_10453@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "769 Concourse Vlg W",
      "zip": "10453"
    },
    {
      "id": "d51dc3328d5949a3863fd865d26c3ba7",
      "name": "Terence Hsuih",
      "email": "terence_hsuih_11372@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "7e5fd5581e71c984fb189d2d8b20bff5",
      "name": "Xiaxi HU",
      "email": "xiaxi_hu_11355@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "9ea40712109bb8dd5912ae04d67fa469",
      "name": "Andy Hu",
      "email": "andy_hu_10002@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "911 Park Ave",
      "zip": "10002"
    },
    {
      "id": "414ed1d725b41918414af2a889a42b28",
      "name": "Yanhan Huang",
      "email": "yanhan_huang_11432@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "136-31 41st Avenue Suite 30",
      "zip": "11432"
    },
    {
      "id": "79cae8d4dd7cf351eb5b6221733f97b3",
      "name": "pervaiz iqbal",
      "email": "pervaiz_iqbal_10312@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "11 Ralph Pl Suite 214",
      "zip": "10312"
    },
    {
      "id": "d55939a854df7478046522c4e6b1ace5",
      "name": "Arkadiy Izrailov",
      "email": "arkadiy_izrailov_10032@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "\"303 9th Avenue, Room 140\"",
      "zip": "10032"
    },
    {
      "id": "674adc52cf39a1079cdcc2577a174dcd",
      "name": "Bhavana Japi",
      "email": "bhavana_japi_10027@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "4260 Broadway",
      "zip": "10027"
    },
    {
      "id": "4d0d308a632733afa5b78a9e086078ef",
      "name": "Babu Jasty",
      "email": "babu_jasty_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "5c87a52ee1e3bbbad13c60c4bda5eccc",
      "name": "O Jean Pierre",
      "email": "o_jean_pierre_11219@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "416 37 St",
      "zip": "11219"
    },
    {
      "id": "c9e3aaef3739c867a8bb9a62a778a9ac",
      "name": "Mark Joseph",
      "email": "mark_joseph_10013@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "\"123 Lafayette Street, 6th floor\"",
      "zip": "10013"
    },
    {
      "id": "437583a8579f43e6c9462acf471085fa",
      "name": "Futrell Junie",
      "email": "futrell_junie_11224@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "a8a4c77efdb9b92407a59d46c0ed30ef",
      "name": "Stephen J. Kaiser",
      "email": "stephen_j._kaiser_10028@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "58 E. 116th St",
      "zip": "10028"
    },
    {
      "id": "a0f44c1ecfac691a12d814c36762a4d8",
      "name": "Yelena Karasina",
      "email": "yelena_karasina_10472@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "1211 White Plains Rd",
      "zip": "10472"
    },
    {
      "id": "ff0d229c625cda58fe7b0ff589a04ce1",
      "name": "Victoria Katz",
      "email": "victoria_katz_11368@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "205-07 Hillside Avenue",
      "zip": "11368"
    },
    {
      "id": "f2054a14b1cb28267ac2e759054ced4d",
      "name": "Victoria Katz",
      "email": "victoria_katz_11105@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "39-07 Prince Sreet",
      "zip": "11105"
    },
    {
      "id": "749870485f8223155abec73e19d75966",
      "name": "Moshe Kerstein",
      "email": "moshe_kerstein_10472@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "305 e 149th st",
      "zip": "10472"
    },
    {
      "id": "27503ddfb9a8eafcb58cd006f0f658de",
      "name": "Meir Kessler",
      "email": "meir_kessler_11373@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "112-03 Queens Blvd.",
      "zip": "11373"
    },
    {
      "id": "314a0d810c4058e73c59165e11ec8eea",
      "name": "Altaf Khan",
      "email": "altaf_khan_10457@gmail.com",
      "specilization": "oncologist",
      "borough": "Flushing",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "7b410cfb04a9c3b3f71d5037280fe0cc",
      "name": "Ari Klapholz",
      "email": "ari_klapholz_11235@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "471 Hart Street",
      "zip": "11235"
    },
    {
      "id": "79c29828f21e1567664cc2542e478441",
      "name": "Igor Kletsman",
      "email": "igor_kletsman_11375@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "185 Hall Street",
      "zip": "11375"
    },
    {
      "id": "45547edfecda33f2fdbdd3ea8206ad52",
      "name": "Michael M. Koegel",
      "email": "michael_m._koegel_11213@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "1335 Ocean Parkway",
      "zip": "11213"
    },
    {
      "id": "0288efacbc400be66269ea39a83813b9",
      "name": "Leon Kohanbasch",
      "email": "leon_kohanbasch_10457@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "7f16fed96ebb338f622a009207d00cbe",
      "name": "Rattanjit Kohli",
      "email": "rattanjit_kohli_10466@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "\"3654 Godwin Terrace, Suite C\"",
      "zip": "10466"
    },
    {
      "id": "6d73098e0879ac03b6bdf4f1aa946a38",
      "name": "DMITRY KONSKY",
      "email": "dmitry_konsky_11355@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "37-11 88th Street",
      "zip": "11355"
    },
    {
      "id": "fd254f2a3bbc21508e1ada14038e272d",
      "name": "Sofya Kostanyan",
      "email": "sofya_kostanyan_10033@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "41 Mott St",
      "zip": "10033"
    },
    {
      "id": "5e363f3f3f3417c8dde6386793ed9a6e",
      "name": "Paul Krantz",
      "email": "paul_krantz_11432@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "136-20 38th Ave",
      "zip": "11432"
    },
    {
      "id": "1929421b69a6a429846a1343e4908ed0",
      "name": "Hinda Krumbein",
      "email": "hinda_krumbein_11226@gmail.com",
      "specilization": "dermatologist",
      "borough": "New York",
      "address": "372 Kingston Avenue",
      "zip": "11226"
    },
    {
      "id": "0e09110a108b7ec09e95857f0d57958a",
      "name": "M Laporte",
      "email": "m_laporte_10031@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "411 West 113TH Street",
      "zip": "10031"
    },
    {
      "id": "772f3f811cf6f5b4b8a7ca6c783f1491",
      "name": "Calvin Lee",
      "email": "calvin_lee_11379@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "deeb9067a60b097d5462f09a0e835b58",
      "name": "Lionel Lefevre",
      "email": "lionel_lefevre_11372@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "8919 Lefferts Blvd",
      "zip": "11372"
    },
    {
      "id": "9806073120fd25ebef2487abfdb12a5e",
      "name": "Xian Min Li",
      "email": "xian_min_li_10022@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Staten Island",
      "address": "\"2 Mott Street, Suite 304\"",
      "zip": "10022"
    },
    {
      "id": "92e5fa96880775cd270733c61afbd0de",
      "name": "Sheldon Lippman",
      "email": "sheldon_lippman_10011@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "328 East 61st Street",
      "zip": "10011"
    },
    {
      "id": "6ce4dd1b447c718abf37ba3f0fa6fd1d",
      "name": "Larisa Litvinova",
      "email": "larisa_litvinova_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "1ed3487f6bd49e35c03500b0481d2708",
      "name": "Jenny Liu",
      "email": "jenny_liu_11375@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "137 10 FRANKLIN AVENUE",
      "zip": "11375"
    },
    {
      "id": "dda003318bfd37928d85de695b9b921e",
      "name": "Peter Lo",
      "email": "peter_lo_10013@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "435 Fort Washington Avenue Suite 1C",
      "zip": "10013"
    },
    {
      "id": "8d3c6dbd9334b6514a5e2fe10d2a5f87",
      "name": "Machlah Lopiar",
      "email": "machlah_lopiar_10462@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "03c7c052471be0271b8c66fb67aa673d",
      "name": "Bing Lu",
      "email": "bing_lu_10001@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "2201 Amsterdam Avenue",
      "zip": "10001"
    },
    {
      "id": "40a0a686f2e519cf7fdf4d8088895c91",
      "name": "Ala-May Lumibao",
      "email": "ala-may_lumibao_10462@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "3010 Grand Concourse",
      "zip": "10462"
    },
    {
      "id": "7891eca3d13bd121dc91041eee196172",
      "name": "Anming Luo",
      "email": "anming_luo_10031@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "0e25fe56467e189a7aeb6857035eccc2",
      "name": "Subash Malhotra",
      "email": "subash_malhotra_10019@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "108 East 96th Street",
      "zip": "10019"
    },
    {
      "id": "b705e3bd9f7aeff794d0239caa7b1458",
      "name": "Madhu Malhotra",
      "email": "madhu_malhotra_11429@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "\"172-27 Highland Ave, Suite 1 B\"",
      "zip": "11429"
    },
    {
      "id": "63044396efb72f87f5c109a298ebc1de",
      "name": "Jubil Malieckal",
      "email": "jubil_malieckal_10453@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "192b2e0f1a4a2a4dfa29e3c65dd590fa",
      "name": "Abdul Malik",
      "email": "abdul_malik_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "\"133-47 Sanford Avenue, Suite 1H\"",
      "zip": "11354"
    },
    {
      "id": "64903043fd9aa07b383a4f2389596803",
      "name": "Buddhadev Manvar",
      "email": "buddhadev_manvar_11372@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "211-16 Union Turnpike",
      "zip": "11372"
    },
    {
      "id": "c62a6d0ad75866ec80df7c9412f7066e",
      "name": "Donald Martinelli",
      "email": "donald_martinelli_11367@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "159-05 92nd St.",
      "zip": "11367"
    },
    {
      "id": "a1b131f58f74aded11bc23151f865e61",
      "name": "Amir Mayer",
      "email": "amir_mayer_10457@gmail.com",
      "specilization": "psychologist",
      "borough": "Flushing",
      "address": "170 W.233rd Street",
      "zip": "10457"
    },
    {
      "id": "57e4dd8cda6b80babec8989234e5b0da",
      "name": "Paul McClung",
      "email": "paul_mcclung_10305@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "305 Seguine Ave Ste. 1",
      "zip": "10305"
    },
    {
      "id": "ae3f7867d2b2e837c2ac05d75066448a",
      "name": "Alexander Merson",
      "email": "alexander_merson_10462@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "84bbbbb6bba23d8727d39032d0ac65e0",
      "name": "P Milord",
      "email": "p_milord_11427@gmail.com",
      "specilization": "general practitioner",
      "borough": "Staten Island",
      "address": "\"180-16 Wexford Terrace, Suite CA\"",
      "zip": "11427"
    },
    {
      "id": "fc22eb70930641a45a8ede1c80a1cdaa",
      "name": "Lucien Mocombe",
      "email": "lucien_mocombe_11209@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "202 Foster Ave. Suite C",
      "zip": "11209"
    },
    {
      "id": "41bc6717397e824d4180cbfdf5c6f0d6",
      "name": "Paul Nacier",
      "email": "paul_nacier_11373@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "33fc064ac1898d82564bd7ac3f7b9cb4",
      "name": "Marcia Nelson",
      "email": "marcia_nelson_11373@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "40-04 Bowne St",
      "zip": "11373"
    },
    {
      "id": "399b03cf76ee27d7e745c29a52418c46",
      "name": "Thao Ngo",
      "email": "thao_ngo_10040@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "145 Chambers St.",
      "zip": "10040"
    },
    {
      "id": "5a4d708a794f78ac07ac1509acf9da4f",
      "name": "Marina Oks",
      "email": "marina_oks_11238@gmail.com",
      "specilization": "dermatologist",
      "borough": "Manhattan",
      "address": "1446 Broadway Avenue",
      "zip": "11238"
    },
    {
      "id": "e2ba72426a9101ab1f6604d6f9fe3b0c",
      "name": "Adebola Orafidiya",
      "email": "adebola_orafidiya_11368@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "169-11 Island Avenue",
      "zip": "11368"
    },
    {
      "id": "745bacfdecdc4a4d2119fe030ca292fe",
      "name": "Maxine Orris",
      "email": "maxine_orris_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "2706813352a2e86bdee3f87a33fbf695",
      "name": "Xin Pang",
      "email": "xin_pang_10031@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "37-35 72nd Street",
      "zip": "10031"
    },
    {
      "id": "ebb038ed963da5531b167f42614bc083",
      "name": "Sudha Patel",
      "email": "sudha_patel_11103@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "1204 Beach 9 St",
      "zip": "11103"
    },
    {
      "id": "509cefdd558c26b2425a1d1cbe23e2c5",
      "name": "Miksha Patel",
      "email": "miksha_patel_11224@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "56c5051ead18f7f03f7caf94fb405462",
      "name": "Lalit Patel",
      "email": "lalit_patel_11103@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "93-20 A Roosevelt Avenue",
      "zip": "11103"
    },
    {
      "id": "70f3c62b2b1897eea0fdb3cbbe8eee17",
      "name": "Jitendra Patel",
      "email": "jitendra_patel_11375@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "42-36 82 STREET C-CF",
      "zip": "11375"
    },
    {
      "id": "6f830f20fd4532b7d084b85cd81df5e6",
      "name": "Jigar Patel",
      "email": "jigar_patel_10028@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "2 Mott Street Suite 304",
      "zip": "10028"
    },
    {
      "id": "eaed0950cb3f49aa93979f33964a0ccb",
      "name": "Himanshu Patel",
      "email": "himanshu_patel_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "1225 Foster Avenue",
      "zip": "11220"
    },
    {
      "id": "80f33d831992be07f75c0210408fc6da",
      "name": "Joseph Paul",
      "email": "joseph_paul_10023@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Cedarhurst",
      "address": "85 WEST 118TH STREET",
      "zip": "10023"
    },
    {
      "id": "2bc0364637dfdf2dfeaea6146e3b87ea",
      "name": "Ainsley Pennant",
      "email": "ainsley_pennant_11373@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "\"213-02 Hillside Ave,\"",
      "zip": "11373"
    },
    {
      "id": "634e047f14587ded9e374330847bc4ed",
      "name": "Manana Petrov",
      "email": "manana_petrov_10312@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Manhattan",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "1e9d236472b7cfa9f8e78be7f78705db",
      "name": "Hari Polavarapu",
      "email": "hari_polavarapu_11205@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "364 Junius Street",
      "zip": "11205"
    },
    {
      "id": "2ec5df52a2acd4b6cc56a422dba792c0",
      "name": "Tze On Poon",
      "email": "tze_on_poon_11204@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "796 Drew Street",
      "zip": "11204"
    },
    {
      "id": "dca9199d8525e96e39790ef3dd200856",
      "name": "Pervaiz I. Qureshi",
      "email": "pervaiz_i._qureshi_11375@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "6506 Roosevelt Ave",
      "zip": "11375"
    },
    {
      "id": "43df9fbbf3c9921ba878ea2db6a3f93a",
      "name": "Shafiqur Rahman",
      "email": "shafiqur_rahman_11694@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "139-87 35th Avenue",
      "zip": "11694"
    },
    {
      "id": "8242a85ea2d34b76993a3667afbf8d0c",
      "name": "Rummana Rahman",
      "email": "rummana_rahman_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "211-16 Union Turnpike",
      "zip": "11372"
    },
    {
      "id": "3659993b4c595521f76576bb5cb362ea",
      "name": "Chenna Reddy",
      "email": "chenna_reddy_11203@gmail.com",
      "specilization": "nephrologist",
      "borough": "Staten Island",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "9137eee23ba9d1ef29221d85310b62ee",
      "name": "Olusanya Rufai",
      "email": "olusanya_rufai_10019@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "166 5th Ave",
      "zip": "10019"
    },
    {
      "id": "7c489bf528639f6c728ccbfa48bd95e0",
      "name": "Boris Sagalovich",
      "email": "boris_sagalovich_10453@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "1280 Givan Avenue",
      "zip": "10453"
    },
    {
      "id": "cabe3632f652494eefb1a78486e337ec",
      "name": "Allan Santiago",
      "email": "allan_santiago_10462@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "b6fa92a3263cde141a0ca22ca1321c4a",
      "name": "Henry Sardar",
      "email": "henry_sardar_11216@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "413 50th Street",
      "zip": "11216"
    },
    {
      "id": "8a7931006ff74cd677f747471a53dc0d",
      "name": "Archana Saxena",
      "email": "archana_saxena_11205@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "863 50th street suite M5",
      "zip": "11205"
    },
    {
      "id": "f902dd4ba7501614de6970e0e1208a5a",
      "name": "Anil Saxena",
      "email": "anil_saxena_11377@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "97-03 Springfield Blvd",
      "zip": "11377"
    },
    {
      "id": "764391c8a08f08e481315aa5e7510582",
      "name": "Michelle Schecter",
      "email": "michelle_schecter_11379@gmail.com",
      "specilization": "nephrologist",
      "borough": "Brooklyn",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "b2742a518aa7802d9a5fa7df047be3d6",
      "name": "Goldie Schwarzbard",
      "email": "goldie_schwarzbard_11368@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "63-84 Saunders St",
      "zip": "11368"
    },
    {
      "id": "687d8d2c795e8c13bd012f61be375f4c",
      "name": "Jorge Serje",
      "email": "jorge_serje_10037@gmail.com",
      "specilization": "cardiologist",
      "borough": "New York",
      "address": "19 East 80th Street",
      "zip": "10037"
    },
    {
      "id": "b1dc36ca5993b752becb3a1a35d8d0f3",
      "name": "Anthony R. Sgarlato",
      "email": "anthony_r._sgarlato_11372@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "47-10 Greenpoint Avenue",
      "zip": "11372"
    },
    {
      "id": "2ec881513515e578ff18cec2a8fdc506",
      "name": "Zihe Shan",
      "email": "zihe_shan_10021@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "9877d30fb747c1121bfd6a88b19b3b50",
      "name": "Josef Shimonov",
      "email": "josef_shimonov_11419@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "114-06 Queens Blvd",
      "zip": "11419"
    },
    {
      "id": "be243c967f42fcacee42759038f5d673",
      "name": "Irene Shir",
      "email": "irene_shir_10033@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "14 East 4th Street",
      "zip": "10033"
    },
    {
      "id": "25265cf5e472725c65c27b9e966ec2fe",
      "name": "Steven Siegal",
      "email": "steven_siegal_10003@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "2-12 Sickles Street",
      "zip": "10003"
    },
    {
      "id": "0d30dc31e77a8e78ec580082b8edbc29",
      "name": "Keisha Sinha",
      "email": "keisha_sinha_10303@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "420 Lyndale Avenue",
      "zip": "10303"
    },
    {
      "id": "fb79f7af00f81cad0908ab252a19f866",
      "name": "Singmay Siu",
      "email": "singmay_siu_11205@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "189 Montague St. Ste 700",
      "zip": "11205"
    },
    {
      "id": "3b42fbabc7d3e133319e4bc98f54f127",
      "name": "Chaya Stern",
      "email": "chaya_stern_10031@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "139 Centre Street Suite 314",
      "zip": "10031"
    },
    {
      "id": "1edb6621e27ba8714a7f4c1654e1076d",
      "name": "Anna Suponya",
      "email": "anna_suponya_11236@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "4268d1f7ccc03899fcb2f6d12f2613b9",
      "name": "FOUZIA SYED",
      "email": "fouzia_syed_11233@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "295 Ralph Avenue",
      "zip": "11233"
    },
    {
      "id": "502e73496f5198e472597e8c049eda67",
      "name": "Francois G. Tellus",
      "email": "francois_g._tellus_11361@gmail.com",
      "specilization": "general practitioner",
      "borough": "Manhattan",
      "address": "104-17 LEFFERTS BLVD",
      "zip": "11361"
    },
    {
      "id": "c6bea221068f923c52ad989ca934e34c",
      "name": "Mark Tsinker",
      "email": "mark_tsinker_11379@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "40854ca939344a1520e3d8d5b53ffd76",
      "name": "Jerry Uduevbo",
      "email": "jerry_uduevbo_11217@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "a09fe167514fc9fa5635403792086c9c",
      "name": "Gonzalo Urbano",
      "email": "gonzalo_urbano_11367@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "159-05 92nd St.",
      "zip": "11367"
    },
    {
      "id": "f332b6fb25c068cec2dc87acc71f820e",
      "name": "Yelena Vayntrub",
      "email": "yelena_vayntrub_11209@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "1509 Rockaway Parkway",
      "zip": "11209"
    },
    {
      "id": "a38a7b0ae3db4a86f03a7951b250a9ae",
      "name": "Saimamba Veeramachaneni",
      "email": "saimamba_veeramachaneni_11373@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "d16922674f1b52f35c7d8573d027145f",
      "name": "Racquel M Volkowitz",
      "email": "racquel_m_volkowitz_11354@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "241-08 140th Ave",
      "zip": "11354"
    },
    {
      "id": "c571389f2bb869b58c9c823255dd3732",
      "name": "Velko Voynov",
      "email": "velko_voynov_11418@gmail.com",
      "specilization": "toxicologists",
      "borough": "Flushing",
      "address": "241-11 147th Ave",
      "zip": "11418"
    },
    {
      "id": "6c36b409ba7ccfc113edbb35fb399a21",
      "name": "Eldawary Wael",
      "email": "eldawary_wael_11694@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "391 East 149th Street",
      "zip": "11694"
    },
    {
      "id": "9421f3c6e6fc2dc045109af7f8dbbf6b",
      "name": "Chaim Wanounou",
      "email": "chaim_wanounou_10031@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "1150 Park Avenue",
      "zip": "10031"
    },
    {
      "id": "9352fb451720680aa99027646d29cc84",
      "name": "Chaim Wanounou",
      "email": "chaim_wanounou_11219@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "753 Classon Avenue Suite LJ",
      "zip": "11219"
    },
    {
      "id": "357d46e45024951dce1eeeefca85e916",
      "name": "Chaim Wanounou",
      "email": "chaim_wanounou_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "41-61 Kissena Blvd.",
      "zip": "11355"
    },
    {
      "id": "db5e8ae5a3ae44fd8eb0900d36792808",
      "name": "Leung Wing Wong",
      "email": "leung_wing_wong_11355@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "\"13338 41 ROAD, SUITE 2Q\"",
      "zip": "11355"
    },
    {
      "id": "395e0e44ebe0c9a93d495bba30297c8c",
      "name": "Jordan Wong",
      "email": "jordan_wong_10467@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "1a39eac8bcd4452d4e9c2a57c8e7832b",
      "name": "Jianlin Wu",
      "email": "jianlin_wu_11411@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "136-30 Maple Ave/ #1A",
      "zip": "11411"
    },
    {
      "id": "c49fc06aa3bc90fbeb1405aef7e73beb",
      "name": "San San Wynn",
      "email": "san_san_wynn_10032@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "067d073637647b1336d1093586c5ec5a",
      "name": "Javid Yadegar",
      "email": "javid_yadegar_10013@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Staten Island",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "ae5ab75fe52cda9284a34f7a0bc4d4bc",
      "name": "Dalia Yadegar",
      "email": "dalia_yadegar_11230@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "34-40 Fulton Street",
      "zip": "11230"
    },
    {
      "id": "7ca4d58d1c6873ec7711a26ea7b00709",
      "name": "Hui Chih Yang",
      "email": "hui_chih_yang_11211@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "60d11469d0cd45cf2ba4df298af729c8",
      "name": "Bin Yang",
      "email": "bin_yang_10468@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "444 Willis Avenue",
      "zip": "10468"
    },
    {
      "id": "f5a31d80f05dbbd430565eec888f7fe1",
      "name": "Hong Ye",
      "email": "hong_ye_11213@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "1e958f4f310afec5ae384b9b62a8a423",
      "name": "Mohammed Yousufuddin",
      "email": "mohammed_yousufuddin_11355@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "6933 169th street",
      "zip": "11355"
    },
    {
      "id": "80a1315fbd5e442cfef9a83c6e4fcf51",
      "name": "Robert Zaloom",
      "email": "robert_zaloom_11355@gmail.com",
      "specilization": "nephrologist",
      "borough": "Bronx",
      "address": "147-15 70TH RD",
      "zip": "11355"
    },
    {
      "id": "d55b2521b004655d4ef842f8060e4d80",
      "name": "Daniel Zanger",
      "email": "daniel_zanger_11234@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "162 Graham Avenue",
      "zip": "11234"
    },
    {
      "id": "b56074697016b0a870694acce9c5a8ed",
      "name": "Alla Mesh",
      "email": "alla_mesh_11220@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "87b0abb3985a7c23f1653a2e01613a91",
      "name": "Joseph Ahram",
      "email": "joseph_ahram_10458@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "60 W Kingsbridge Road",
      "zip": "10458"
    },
    {
      "id": "30733ae8209b5b1688270e5d38c62fd1",
      "name": "Faina Akselrod",
      "email": "faina_akselrod_11213@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "97-13 64th Road",
      "zip": "11213"
    },
    {
      "id": "e739e7fc3876a72b0f7ec31623fd9c59",
      "name": "Bassam Aldaia",
      "email": "bassam_aldaia_10027@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "4260 Broadway",
      "zip": "10027"
    },
    {
      "id": "3ffc5406ffe2f11c8940f4a4974055b0",
      "name": "Frank Arbucci",
      "email": "frank_arbucci_11355@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "37-11 88th Street",
      "zip": "11355"
    },
    {
      "id": "33478cbec8e9223ee8c772e3889f7864",
      "name": "Hyunsoon Beatrice Im",
      "email": "hyunsoon_beatrice_im_11419@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "\"90-50 Parsons Blvd, Suite 211\"",
      "zip": "11419"
    },
    {
      "id": "38b2c14a020ad24a51613086019fc375",
      "name": "Renae Bright",
      "email": "renae_bright_11207@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "10406 Flatlands Avenue",
      "zip": "11207"
    },
    {
      "id": "cc794bd302a4173111e199c68a09259b",
      "name": "Elaine Brown",
      "email": "elaine_brown_10463@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "d803a44427a9c213491362da5d9d48d1",
      "name": "Prasanta Chandra",
      "email": "prasanta_chandra_11379@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "d10a894910cdc03235d85c133be2c11a",
      "name": "Subodh Datta",
      "email": "subodh_datta_11373@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "90-10 Elmhurst Avenue",
      "zip": "11373"
    },
    {
      "id": "57d339929e3d217931d94d1e4e105df9",
      "name": "Fayez Guirguis",
      "email": "fayez_guirguis_11364@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "3229 162nd Street",
      "zip": "11364"
    },
    {
      "id": "482ca42f850a0bfbca99594ae98eda6e",
      "name": "Gillian Haans",
      "email": "gillian_haans_11209@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "1262 Ocean Parkway",
      "zip": "11209"
    },
    {
      "id": "d2e41fddc17cb2364828ba6ccd047b0b",
      "name": "Ronald Jacques",
      "email": "ronald_jacques_1122611201@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "1523 45TH ST",
      "zip": "1122611201"
    },
    {
      "id": "eb36d75dbea530839355d9f0d44b38c4",
      "name": "Haroutyoun Margossian",
      "email": "haroutyoun_margossian_11203@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "622 Schnedctady Avenue",
      "zip": "11203"
    },
    {
      "id": "cd9225248f4f97341df694b319d511ba",
      "name": "George McMillan",
      "email": "george_mcmillan_10461@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "860 Grand Concourse",
      "zip": "10461"
    },
    {
      "id": "72485edf844e1cef7d73d5a68444280e",
      "name": "Afamefune Onejemie",
      "email": "afamefune_onejemie_11230@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "100 Ross Street",
      "zip": "11230"
    },
    {
      "id": "c339f6d264d4eb2b3490299b1cd92ba7",
      "name": "Emilia Pollack",
      "email": "emilia_pollack_11692@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "\"133-29 41st Rd, 2D\"",
      "zip": "11692"
    },
    {
      "id": "98b1f8321121e5ce4c29624cbded610f",
      "name": "John C. Riggs",
      "email": "john_c._riggs_11230@gmail.com",
      "specilization": "hematologist",
      "borough": "Manhattan",
      "address": "2119 West 6th Street",
      "zip": "11230"
    },
    {
      "id": "d601cfd5854acaf5073d260bc08b45f9",
      "name": "Jill Swenson",
      "email": "jill_swenson_11372@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "83-10 Queens Blvd",
      "zip": "11372"
    },
    {
      "id": "fd09912ae5f0e26a91dd93652275a891",
      "name": "Usukumah E. Usukumah",
      "email": "usukumah_e._usukumah_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "201 East 69th St",
      "zip": "11355"
    },
    {
      "id": "811afd2a0cb97bee232a99dfff1b80d5",
      "name": "Eddy Vincent",
      "email": "eddy_vincent_11208@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "514 Fifth Street",
      "zip": "11208"
    },
    {
      "id": "666ff8d1a58846af0943df82f00bf9dc",
      "name": "Linli Yan-Rosenberg",
      "email": "linli_yan-rosenberg_11385@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "38-34 Parsons blvd #1A",
      "zip": "11385"
    },
    {
      "id": "d2b7b3e7e1f857468225acae14af7a9f",
      "name": "Simcha Ben-David",
      "email": "simcha_ben-david_10013@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "0f468d463ff5c941f9794ec6c734310f",
      "name": "Rainer Mittl",
      "email": "rainer_mittl_11224@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "\"1664 East 14th Street, Suite 401\"",
      "zip": "11224"
    },
    {
      "id": "c5669e3112456a50c971aff4ed179542",
      "name": "Mitchell Seidman",
      "email": "mitchell_seidman_11203@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Manhattan",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "a378642bc53383da620e0905aa56579e",
      "name": "Lamont Freeman",
      "email": "lamont_freeman_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "Manhattan",
      "address": "375 East Fordham Road",
      "zip": "10453"
    },
    {
      "id": "1d95cebefa8464c6c6a5e401d4fb988c",
      "name": "Most Jahan Begum",
      "email": "most_jahan_begum_10458@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "1ef83697b2811c3efd185ee90a4e676b",
      "name": "Thomas Bustros",
      "email": "thomas_bustros_11103@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "136-403 9th Avnue",
      "zip": "11103"
    },
    {
      "id": "840a8ae1b8f5ecd941ead358ff157a77",
      "name": "Alan David",
      "email": "alan_david_10463@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "2202 Grand Concourse",
      "zip": "10463"
    },
    {
      "id": "54381a3176e0500497f77445492483a6",
      "name": "Carol De Costa",
      "email": "carol_de_costa_11418@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "2760 Amboy Road",
      "zip": "11418"
    },
    {
      "id": "0d5cfd43797949fbcc03a253d3afc894",
      "name": "Dana DeVito",
      "email": "dana_devito_11203@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "2379 65th Street",
      "zip": "11203"
    },
    {
      "id": "0c17d240a05c31b190a4e035368a4f5a",
      "name": "Alix Dufresne",
      "email": "alix_dufresne_11219@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "1125 FULTON STREET 3RD FLOOR",
      "zip": "11219"
    },
    {
      "id": "dc60483fae6b63b659d6a612a2c774a3",
      "name": "Yuliya Giyaur",
      "email": "yuliya_giyaur_10451@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Bronx",
      "address": "1565 Grand Concourse",
      "zip": "10451"
    },
    {
      "id": "1e463ceb12b2ac95622bf96a6732c95b",
      "name": "Eric Jerome",
      "email": "eric_jerome_11213@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "563 Grand Street",
      "zip": "11213"
    },
    {
      "id": "4cb9c70903246e5fffb945806a8b87ab",
      "name": "Craig A. Kaiser",
      "email": "craig_a._kaiser_10013@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "66cca92ada2a02eaac8218eb0aa2b290",
      "name": "Imtiyaz Kapadwala",
      "email": "imtiyaz_kapadwala_11209@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "1509 Rockaway Parkway",
      "zip": "11209"
    },
    {
      "id": "5aa03ac1bd315ec455f1928ed73a6d71",
      "name": "Givvi Lauren",
      "email": "givvi_lauren_11236@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "8008 Third Avenue",
      "zip": "11236"
    },
    {
      "id": "4758ed7589267f623e60d67a3b848517",
      "name": "Jiang Ming",
      "email": "jiang_ming_11372@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "47-10 Greenpoint Avenue",
      "zip": "11372"
    },
    {
      "id": "f50cb8dd3875122d245773bc6898db20",
      "name": "Kotresha Neelakantappa",
      "email": "kotresha_neelakantappa_10468@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "4139 Wickham Ave",
      "zip": "10468"
    },
    {
      "id": "a26dab48f6e05a46f4e75ba4715d1a0a",
      "name": "Olga Tyuleneva",
      "email": "olga_tyuleneva_11210@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "264 1st Street",
      "zip": "11210"
    },
    {
      "id": "b4d591b331a602150b78f4a174c1797e",
      "name": "Xin Yu Zhao",
      "email": "xin_yu_zhao_11203@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "d335d8b29d8b64449c6c776953f6684c",
      "name": "GARY ABBERBOCK",
      "email": "gary_abberbock_11220@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "706 Banner Ave.",
      "zip": "11220"
    },
    {
      "id": "1a74459c3c8f3b4963572e3a9d2f77e1",
      "name": "Michael Abbey-Mensah",
      "email": "michael_abbey-mensah_11211@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "5 Avenue I",
      "zip": "11211"
    },
    {
      "id": "87afb21d7f192734a1ba8a44629a5ff6",
      "name": "Laeeq Ahmad",
      "email": "laeeq_ahmad_11203@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "8bcbaa6fb03db1bc929c3954fc78d7d8",
      "name": "Zaheer Ahmed",
      "email": "zaheer_ahmed_10462@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "d1bbff029510a8ff325cc12a0da2b80b",
      "name": "Neera Ahuja",
      "email": "neera_ahuja_10030@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "0f0a1ca16d35f40879b8764e69569bf2",
      "name": "Muhammad S. Alam",
      "email": "muhammad_s._alam_11420@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "89-18 134 street",
      "zip": "11420"
    },
    {
      "id": "fe1221ac3281d752f3f98e9b2c921db6",
      "name": "Elana Altzman",
      "email": "elana_altzman_11203@gmail.com",
      "specilization": "diabetologists",
      "borough": "Brooklyn",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "e5b5c9ea5ac2c112cf43ec649e52fbe9",
      "name": "Leslie Alvarado",
      "email": "leslie_alvarado_10010@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "e2ab59b61c7f44724f892398353b94ad",
      "name": "Abdulla Alwani",
      "email": "abdulla_alwani_10013@gmail.com",
      "specilization": "surgeon",
      "borough": "Bronx",
      "address": "2 West 86th Street Suite 4",
      "zip": "10013"
    },
    {
      "id": "03a219b0659a25ccdb4265af6fd12a23",
      "name": "Jing Jing Ao",
      "email": "jing_jing_ao_11213@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "8fbb1e548c2e001c2e76f626a2d8c458",
      "name": "Mohamed Azam",
      "email": "mohamed_azam_11203@gmail.com",
      "specilization": "diabetologists",
      "borough": "Flushing",
      "address": "354 Monroe Place",
      "zip": "11203"
    },
    {
      "id": "330b6811b0e7920bcc38aadc51abb487",
      "name": "Angela Badiner",
      "email": "angela_badiner_10462@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "800 Grand Concouse Office #5",
      "zip": "10462"
    },
    {
      "id": "04e03843654b624694acca361c217c92",
      "name": "Albert Bassoul",
      "email": "albert_bassoul_11420@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "89-18 134 street",
      "zip": "11420"
    },
    {
      "id": "df39e65e138299a280bdf08d21f8bb2f",
      "name": "Mordechai Beityakov",
      "email": "mordechai_beityakov_11237@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "220 A St. Nicholas Avenue",
      "zip": "11237"
    },
    {
      "id": "c5b349f1ba01a3f4c4297ed13c0abbcb",
      "name": "Samuel Bekar",
      "email": "samuel_bekar_10021@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "6cee39c12187c62483331a68399cda4a",
      "name": "Sudhakar Bhagavath",
      "email": "sudhakar_bhagavath_10021@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "108 E 96th St",
      "zip": "10021"
    },
    {
      "id": "3160232adf52de5a7fc65565d5ac2ef8",
      "name": "Bella Binik",
      "email": "bella_binik_11375@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "95-11 101 Ave",
      "zip": "11375"
    },
    {
      "id": "7a9eb390bc3eb7d2478e934e7e9d275a",
      "name": "Israel Bochner",
      "email": "israel_bochner_11210@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "94-13 Flatlands Ave. Suite 101",
      "zip": "11210"
    },
    {
      "id": "54ebbe9140dbcaaadf7e624aab98435b",
      "name": "Jean-Robert Boursiquot",
      "email": "jean-robert_boursiquot_11203@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Staten Island",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "d0e7af27671bb3e091cbbe663da02ab1",
      "name": "Mercy Brew",
      "email": "mercy_brew_11355@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "41-61 Kissena Blvd.",
      "zip": "11355"
    },
    {
      "id": "c92523cb52bff699a350b60c76a9f0d9",
      "name": "Laura Bruno",
      "email": "laura_bruno_11368@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "\"9817 Queens Boulevard, LL2\"",
      "zip": "11368"
    },
    {
      "id": "0322b9ba352cc77ceea138a125d5feb6",
      "name": "Verlaine Brunot",
      "email": "verlaine_brunot_11373@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "5ff4137e23204f4eb54baf856d315678",
      "name": "Max Bulmash",
      "email": "max_bulmash_10065@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "67 Irving Place",
      "zip": "10065"
    },
    {
      "id": "9881ed74fd1a5e85300ee72cd9bd75d1",
      "name": "Rahila Butt",
      "email": "rahila_butt_11238@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "5 Debevoise Street",
      "zip": "11238"
    },
    {
      "id": "e1019d61e72e5727683bbaa0fea8ba30",
      "name": "Rahila Butt",
      "email": "rahila_butt_11211@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Cedarhurst",
      "address": "3904 16th Avenue",
      "zip": "11211"
    },
    {
      "id": "6d2545c540ee0472c4a0a7f67d7df486",
      "name": "Jennifer Cheng",
      "email": "jennifer_cheng_10019@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "108 East 96th Street",
      "zip": "10019"
    },
    {
      "id": "ada7f23ad4d95169397c162a55e0948d",
      "name": "MOHAMMAD CHHIPA",
      "email": "mohammad_chhipa_10013@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "0dc6ce38007df2db3b155a958ffe69c2",
      "name": "Veluy Chorm",
      "email": "veluy_chorm_11375@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "164-08 65th Ave",
      "zip": "11375"
    },
    {
      "id": "8410e6fe3184ac9295c07ec403051bb8",
      "name": "Valeriy Chorny",
      "email": "valeriy_chorny_10032@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "1e333c17b23b68a7f7c20a69a0afd0fe",
      "name": "Margaret Clarke-Golden",
      "email": "margaret_clarke-golden_10022@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "33 W. 125th St",
      "zip": "10022"
    },
    {
      "id": "e24ac3194565fa40abbe933dcaf579b0",
      "name": "Erin Dalton",
      "email": "erin_dalton_11224@gmail.com",
      "specilization": "general practitioner",
      "borough": "Flushing",
      "address": "520 Neptune avenue",
      "zip": "11224"
    },
    {
      "id": "a52bd1f352082b1afdb47dd9c9424894",
      "name": "Laura Dattner",
      "email": "laura_dattner_10032@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "16b6f73939df5f60d6f1ff40d38a8f73",
      "name": "Angela Davydov",
      "email": "angela_davydov_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "108 E 96th St",
      "zip": "10021"
    },
    {
      "id": "485e049ee8afd5110fcf378999327d22",
      "name": "Angela Davydov",
      "email": "angela_davydov_11217@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "\"33 8th Ave, Ground Floor\"",
      "zip": "11217"
    },
    {
      "id": "92d8c19c1831ddea5e21bec7922082e9",
      "name": "Francis DeVito",
      "email": "francis_devito_11374@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "\"136-17 39th Avenue, Flushing NY, 11354, Suite CFC, 4th Floor\"",
      "zip": "11374"
    },
    {
      "id": "805f166c23f5f5f40b5a2b78c2c7a8c7",
      "name": "Vincent Dowling",
      "email": "vincent_dowling_10044@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "f935a36c7b1805b7ffc30f3a39e8988d",
      "name": "Liliya Drukman",
      "email": "liliya_drukman_10032@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "\"303 9th Avenue, Room 140\"",
      "zip": "10032"
    },
    {
      "id": "a81d24841b30328fc73afaf1b65575a9",
      "name": "Carole Dubuche",
      "email": "carole_dubuche_11220@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "808 New York Avenue",
      "zip": "11220"
    },
    {
      "id": "e1bff1455ce3641f142c89fdb63521da",
      "name": "Grace Dworan",
      "email": "grace_dworan_10013@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Staten Island",
      "address": "2 West 86th Street Suite 4",
      "zip": "10013"
    },
    {
      "id": "08c53f17d7b6f2d982b9aedfc819ea46",
      "name": "Saul Feldman",
      "email": "saul_feldman_11203@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Queens",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "07a3d66d5049df61657a1c2100ad0820",
      "name": "Saul Feldman",
      "email": "saul_feldman_11377@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "87-04 Rockaway Beach Blvd",
      "zip": "11377"
    },
    {
      "id": "eb545b1713244bdb00a507b569f2cde7",
      "name": "Marie France Conde",
      "email": "marie_france_conde_11042@gmail.com",
      "specilization": "endocrinologist",
      "borough": "New York",
      "address": "90-01 A Roosevelt Ave",
      "zip": "11042"
    },
    {
      "id": "39e04eb7505dac0b9d3de609e25be611",
      "name": "Robin Frankel-Ovitsh",
      "email": "robin_frankel-ovitsh_10044@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "911 Park Avenue",
      "zip": "10044"
    },
    {
      "id": "fdcd23b33512eb4a93d3848781e53b2e",
      "name": "Tatyana Gabinskaya",
      "email": "tatyana_gabinskaya_11372@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "39-07 PRINCE ST. 6H",
      "zip": "11372"
    },
    {
      "id": "25abe9a14f705b280588fa06f03ead02",
      "name": "Mindy Galagher",
      "email": "mindy_galagher_11213@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "9236fc178954d62fbe1a9888cae1ef80",
      "name": "Ewa Gawlik",
      "email": "ewa_gawlik_10458@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "1715 University Blvd",
      "zip": "10458"
    },
    {
      "id": "fa9188eb893bb0eb5a68e482d5077dbb",
      "name": "Tajammal Gilani",
      "email": "tajammal_gilani_11233@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "1125 Fulton Street",
      "zip": "11233"
    },
    {
      "id": "4b8642233869565c1b8c5821be97d33e",
      "name": "Fernando A. Ginebra",
      "email": "fernando_a._ginebra_11211@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "1455 East 24th Street",
      "zip": "11211"
    },
    {
      "id": "4d98f5537f15ff9e25146e1a17fc7e80",
      "name": "Teresita Go",
      "email": "teresita_go_10458@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "bbf5c0a34c6a13b21540c17c7018d488",
      "name": "Florence Golamco",
      "email": "florence_golamco_11219@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "416 37 St",
      "zip": "11219"
    },
    {
      "id": "f055b35e17533e0eca6b79f08af2b924",
      "name": "Steven J. Goldstein",
      "email": "steven_j._goldstein_11237@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "370 9th Street",
      "zip": "11237"
    },
    {
      "id": "3a359d26f412ef933186725db53c538a",
      "name": "Eva Gomolinski",
      "email": "eva_gomolinski_11213@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "124 E 43rd St",
      "zip": "11213"
    },
    {
      "id": "af0513b2d50036ce40e28c3bad460753",
      "name": "James Gough",
      "email": "james_gough_11224@gmail.com",
      "specilization": "gynecologist",
      "borough": "Brooklyn",
      "address": "520 Neptune avenue",
      "zip": "11224"
    },
    {
      "id": "0724f7747549c187ed37f1d75526ce89",
      "name": "Christina Guillen",
      "email": "christina_guillen_10453@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "607 Soundview Ave",
      "zip": "10453"
    },
    {
      "id": "2d193a9148e82aecd40f6ed13aaacb92",
      "name": "HANI HABIB",
      "email": "hani_habib_11418@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "64-15 Fresh Pond Rd",
      "zip": "11418"
    },
    {
      "id": "b190c11808248070e5bfc8e791bcd22e",
      "name": "Michael Hannan",
      "email": "michael_hannan_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "209 Beach 125st",
      "zip": "11354"
    },
    {
      "id": "d7595372ec612c883bd48458537f3f7d",
      "name": "Holson S. Hector",
      "email": "holson_s._hector_10016@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "629 W 185th St",
      "zip": "10016"
    },
    {
      "id": "55783d7b1a143f9e3035a183e6dbec54",
      "name": "Syed M. Hussaini",
      "email": "syed_m._hussaini_10024@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "4250 Broadway Suite 1A",
      "zip": "10024"
    },
    {
      "id": "4c57cd315da9358ca82c7956ec8c874a",
      "name": "Melissa Hutt",
      "email": "melissa_hutt_10013@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "19 Hamilton Place",
      "zip": "10013"
    },
    {
      "id": "c739a284230e286e583f8aea4a1d01fc",
      "name": "Rosemary Jackson",
      "email": "rosemary_jackson_10016@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "629 W 185th St",
      "zip": "10016"
    },
    {
      "id": "1b0649da9aaa93ce92f90eef4dea4e34",
      "name": "Charles Jean Cloude",
      "email": "charles_jean_cloude_11411@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "214-08 Hillside Avenue",
      "zip": "11411"
    },
    {
      "id": "f2e1a9647d40dc197d258042ea9b9133",
      "name": "Temitope Jose",
      "email": "temitope_jose_10467@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "225A E. 149th Street",
      "zip": "10467"
    },
    {
      "id": "2f1042081a2be0a0f9f952dd25837a64",
      "name": "Christopher Kacin",
      "email": "christopher_kacin_10032@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "\"303 9th Avenue, Room 140\"",
      "zip": "10032"
    },
    {
      "id": "b04caaf803ec8b7f6e8a147783b5923b",
      "name": "Shira Kaplovitz",
      "email": "shira_kaplovitz_11372@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "d6ce53208c89e63c87000e250aaf49a1",
      "name": "Ferdousi Khan",
      "email": "ferdousi_khan_11419@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "1236 FULTON STREET",
      "zip": "11419"
    },
    {
      "id": "6e2c82e2c992d0031a19a9aad41de161",
      "name": "Rita Khanijou",
      "email": "rita_khanijou_10002@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "210 W 139th St",
      "zip": "10002"
    },
    {
      "id": "4fb3de3b73f04871ee3f1937c1a1f35d",
      "name": "Seth Kurtz",
      "email": "seth_kurtz_11354@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Manhattan",
      "address": "209 Beach 125st",
      "zip": "11354"
    },
    {
      "id": "70c2f8872d9191a4d7f72ac426174fd0",
      "name": "Seth Kurtz",
      "email": "seth_kurtz_11219@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "540 East New York Avenue",
      "zip": "11219"
    },
    {
      "id": "5051c5d08dd0daa5410a689f7d729dfb",
      "name": "Moshe Lazar",
      "email": "moshe_lazar_11211@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "3f1460ca60e22a22d4aee4244555493e",
      "name": "Marie E. Lefevre",
      "email": "marie_e._lefevre_10021@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "61eab809ef9fa13e9371a14955d4ba74",
      "name": "\"Hanna Lesicka M.D F.A.A.P., P.C.\"",
      "email": "\"hanna_lesicka_m.d_f.a.a.p.,_p.c._11373@gmail.com\"",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "410 Lakeville Road",
      "zip": "11373"
    },
    {
      "id": "64bb3580061eb754d93a138db0f19aff",
      "name": "Jack Levine",
      "email": "jack_levine_10128@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "40 West 135th Street",
      "zip": "10128"
    },
    {
      "id": "ae359bab0bdcd3f95f875fe926b5ef9e",
      "name": "Mark Lew",
      "email": "mark_lew_11203@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "167 Rutledge St",
      "zip": "11203"
    },
    {
      "id": "4e75f3b3dc315fc6256d61fb90a74834",
      "name": "Rekha Mahale",
      "email": "rekha_mahale_11219@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "231 South 3rd Street",
      "zip": "11219"
    },
    {
      "id": "bd41fb671abb8971ee0e94af18203fd4",
      "name": "Dolores Martinez",
      "email": "dolores_martinez_10024@gmail.com",
      "specilization": "hematologist",
      "borough": "New York",
      "address": "\"99 University Place, 3Rd floor\"",
      "zip": "10024"
    },
    {
      "id": "e2fd281343d0fbd7deb2b2ec925b7223",
      "name": "Hosneara Masub",
      "email": "hosneara_masub_10013@gmail.com",
      "specilization": "general practitioner",
      "borough": "New York",
      "address": "338 E 30th St",
      "zip": "10013"
    },
    {
      "id": "7adbaccaca2d7ebcbeef318a1d0be114",
      "name": "Leonore Max",
      "email": "leonore_max_11385@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "141-49 70 Road",
      "zip": "11385"
    },
    {
      "id": "570eaada3834cdc0eefdfd5bc91b8c90",
      "name": "Michael Mazza",
      "email": "michael_mazza_10031@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Brooklyn",
      "address": "139 Centre Street Suite 314",
      "zip": "10031"
    },
    {
      "id": "109e169831e4ee1b12883bd74552373c",
      "name": "Harvey Mermelstein",
      "email": "harvey_mermelstein_10128@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "247 3rd Ave",
      "zip": "10128"
    },
    {
      "id": "220b6505f5873cf0a81a088b0c5cce07",
      "name": "Zahava Miller",
      "email": "zahava_miller_10011@gmail.com",
      "specilization": "nephrologist",
      "borough": "Manhattan",
      "address": "620 columbus ave",
      "zip": "10011"
    },
    {
      "id": "7a5bc15372739f0d4e77eee87b348eaf",
      "name": "Alisa Minkin",
      "email": "alisa_minkin_10013@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "f522d52317105d1d8741702b99665eed",
      "name": "Mukund Mody",
      "email": "mukund_mody_11203@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "7bcc355e4371a18568863069cb1f8e01",
      "name": "Patricia Mullings",
      "email": "patricia_mullings_10027@gmail.com",
      "specilization": "urologist",
      "borough": "Queens",
      "address": "4260 Broadway",
      "zip": "10027"
    },
    {
      "id": "8f0217cf57f900805e3bff1e4abed72a",
      "name": "Rachelle Namm",
      "email": "rachelle_namm_11203@gmail.com",
      "specilization": "diabetologists",
      "borough": "Queens",
      "address": "1473 Sterling Place",
      "zip": "11203"
    },
    {
      "id": "501cb8d4921e43761e215ee21a1b2281",
      "name": "Irina Nelipovich",
      "email": "irina_nelipovich_10458@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "7aead1e9c49d2d876d8467ca1cc6e858",
      "name": "Brianne O'Connor",
      "email": "brianne_o'connor_11355@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "95-42 Roosevelt Ave",
      "zip": "11355"
    },
    {
      "id": "79ffedff1c0f5674ad5658cf0a34137c",
      "name": "Uzoma Okorrie",
      "email": "uzoma_okorrie_11418@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "2760 Amboy Road",
      "zip": "11418"
    },
    {
      "id": "963ba8450f7e8d4790a915156e0e8308",
      "name": "Bola Olajide",
      "email": "bola_olajide_10016@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "\"571 Academy Street, Apt. GLE\"",
      "zip": "10016"
    },
    {
      "id": "89e6de8788e40aa28aeac59cfef2b20d",
      "name": "Prudence Osei-Tutu",
      "email": "prudence_osei-tutu_10461@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "New York",
      "address": "3134 E. Tremont Ave",
      "zip": "10461"
    },
    {
      "id": "d9fcda78215566f23f4a0e1dee69e1a4",
      "name": "Allan Plaut",
      "email": "allan_plaut_10003@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "128 Mott Street Suite 302",
      "zip": "10003"
    },
    {
      "id": "ba877e15f1abd96f36847becd8e02f16",
      "name": "Oded Preis",
      "email": "oded_preis_11103@gmail.com",
      "specilization": "cardiologist",
      "borough": "Manhattan",
      "address": "43-48 Colden St.",
      "zip": "11103"
    },
    {
      "id": "a4392654f413e8f7b19a8c14fd931ff0",
      "name": "Sherill Purcell",
      "email": "sherill_purcell_10031@gmail.com",
      "specilization": "gynecologist",
      "borough": "Staten Island",
      "address": "2311 Adam Clayton Powell Jr.Boulevard",
      "zip": "10031"
    },
    {
      "id": "2ac0a89541b6d623f97baa5506cdd085",
      "name": "Edna Anne Pytlak",
      "email": "edna_anne_pytlak_10011@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "\"19 Bowery, 2nd floor\"",
      "zip": "10011"
    },
    {
      "id": "1840da55d0b8e8d8867b0d2fca7ce75a",
      "name": "Madhu Rajaram",
      "email": "madhu_rajaram_11221@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "3709 9th Street",
      "zip": "11221"
    },
    {
      "id": "8d2717083cf57763f80af41001a49b98",
      "name": "REBECCA RAOOF",
      "email": "rebecca_raoof_11219@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "1421 E 2ND ST",
      "zip": "11219"
    },
    {
      "id": "a040230bd148271d7376f4f2c4dc3c58",
      "name": "NABIL RAOOF",
      "email": "nabil_raoof_11221@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "\"1664 East 14th Street, Suite 302\"",
      "zip": "11221"
    },
    {
      "id": "d71c3c35b529e41fd677c13f940978c9",
      "name": "Dalan Sow Read",
      "email": "dalan_sow_read_11368@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "9f71e1ffcf2b34f7e24084cedf1a3655",
      "name": "Ella-Jean Richards",
      "email": "ella-jean_richards_11372@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "117-06 225th Street 1st Floor",
      "zip": "11372"
    },
    {
      "id": "165103d378ffad47749ec9059800abb8",
      "name": "Howard J Rosman",
      "email": "howard_j_rosman_10016@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "\"571 Academy Street, Apt. GLE\"",
      "zip": "10016"
    },
    {
      "id": "bde06da04b020f85dddb6b9e7934ba8a",
      "name": "Peter Ruzohorsky",
      "email": "peter_ruzohorsky_11356@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "\"8330 Vietor Avenue, Suite P-1\"",
      "zip": "11356"
    },
    {
      "id": "b9501c2aa84116da48a3bf9ad45f319e",
      "name": "Jack Sadacka",
      "email": "jack_sadacka_10466@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "\"3654 Godwin Terrace, Suite C\"",
      "zip": "10466"
    },
    {
      "id": "d8966dbc773e53685e1c8cbe57c50b84",
      "name": "Mario Saint-Laurent",
      "email": "mario_saint-laurent_11209@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "217 73rd Street",
      "zip": "11209"
    },
    {
      "id": "520249860dbf69728ab42e269164ce10",
      "name": "Henry Sardar",
      "email": "henry_sardar_10002@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "210 W 139th St",
      "zip": "10002"
    },
    {
      "id": "69fc652db1c0d2990cae1924a784bc3c",
      "name": "Gerald Schulman",
      "email": "gerald_schulman_10468@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "\"2385 Arthur Avenue, Suite @206\"",
      "zip": "10468"
    },
    {
      "id": "88c07aed63ece7285bbc31aa9274c657",
      "name": "Shira Selevan",
      "email": "shira_selevan_11355@gmail.com",
      "specilization": "gynecologist",
      "borough": "Flushing",
      "address": "147-15 70TH RD",
      "zip": "11355"
    },
    {
      "id": "151aa89fd8a934ed80b1e0387376f17e",
      "name": "Nissar Shaikh",
      "email": "nissar_shaikh_11372@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "87-59 171st Street",
      "zip": "11372"
    },
    {
      "id": "2e315d80ff937bbc25d005eee249ebf8",
      "name": "Donna Simmons",
      "email": "donna_simmons_11432@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Brooklyn",
      "address": "75-17 41ST AVE",
      "zip": "11432"
    },
    {
      "id": "1383ddaf4542d6c9014e7d32b8fd22e3",
      "name": "Jimmy Sitt",
      "email": "jimmy_sitt_11368@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "420a371383375f4d7f40dac08ce31aa7",
      "name": "Agnes So",
      "email": "agnes_so_10031@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "288b9eae7f75e8000c74fddd476b6e45",
      "name": "Maria Soto",
      "email": "maria_soto_10128@gmail.com",
      "specilization": "hematologist",
      "borough": "Flushing",
      "address": "245 West 19th Street #CF",
      "zip": "10128"
    },
    {
      "id": "6c2dbc62aeae0026feb14250921f67d9",
      "name": "Sveltana Spivak",
      "email": "sveltana_spivak_11216@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "7318 13th Avenue",
      "zip": "11216"
    },
    {
      "id": "fb758730c7408a0817f324395820f92e",
      "name": "Rosemarie St. Victor",
      "email": "rosemarie_st._victor_10013@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "2 West 86th Street Suite 4",
      "zip": "10013"
    },
    {
      "id": "4ac9ef381d4e8df3bc79a38c0afeff42",
      "name": "Rivka Stein",
      "email": "rivka_stein_11435@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "4207 30th Avenue",
      "zip": "11435"
    },
    {
      "id": "a7a6c562ce5955ba4c79f2047e91cb00",
      "name": "Gaston Sterlin",
      "email": "gaston_sterlin_11203@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "503726e7288eb7dfe64eff136108e63c",
      "name": "Elna Tamayo-Prado",
      "email": "elna_tamayo-prado_10453@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Bronx",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "4e8f374d8ef72bdf31049db9afd8ffe2",
      "name": "Samia Tayab",
      "email": "samia_tayab_11411@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "136-30 Maple Ave/ #1A",
      "zip": "11411"
    },
    {
      "id": "27fabbcc97c8afeb7ccf41f36a5d5c53",
      "name": "Jeffrey Teitelbaum",
      "email": "jeffrey_teitelbaum_10463@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "3200 Bronx Blvd",
      "zip": "10463"
    },
    {
      "id": "b7533e6e5a661a36746a1fc2dcbf151b",
      "name": "Tziporah Thall",
      "email": "tziporah_thall_10453@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "1216 Beach Ave #1",
      "zip": "10453"
    },
    {
      "id": "cec6627b4f81ddb7d7d4afc21ca40667",
      "name": "Feliks Tsatskin",
      "email": "feliks_tsatskin_11354@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "112-03 Queens Blvd",
      "zip": "11354"
    },
    {
      "id": "7d888eddac659502baffdcc3977714b6",
      "name": "Tinmar Tun",
      "email": "tinmar_tun_10463@gmail.com",
      "specilization": "cardiologist",
      "borough": "Queens",
      "address": "3510 Bainbridge Avenue",
      "zip": "10463"
    },
    {
      "id": "7c824457fed0e91bb8062c7b0c11acc8",
      "name": "Emilio Villegas",
      "email": "emilio_villegas_11103@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "39-45 Queens Blvd",
      "zip": "11103"
    },
    {
      "id": "df28dc13f3875edf2705768a50c509f1",
      "name": "Sonia Vinas",
      "email": "sonia_vinas_11422@gmail.com",
      "specilization": "cardiologist",
      "borough": "Staten Island",
      "address": "\"136-21 Roosevelt Ave, #205\"",
      "zip": "11422"
    },
    {
      "id": "b32e1358650440a5671d3a7712895fa9",
      "name": "Azra Wasti",
      "email": "azra_wasti_10030@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "c207c0851ea6257399e7559b6c45c05e",
      "name": "Ingrid Williams",
      "email": "ingrid_williams_11368@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "4053 75th Street",
      "zip": "11368"
    },
    {
      "id": "a562d94131918abfde99c4a05a5a1625",
      "name": "Yechiel Zagelbaum",
      "email": "yechiel_zagelbaum_10031@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "9e437f138cdcb52595203ddf620f91f1",
      "name": "Han Zhang",
      "email": "han_zhang_11211@gmail.com",
      "specilization": "urologist",
      "borough": "New York",
      "address": "\"1 Hanson pl, Ste. 708\"",
      "zip": "11211"
    },
    {
      "id": "9c4b16220922df1b19fa842663799752",
      "name": "Chaim Backman",
      "email": "chaim_backman_10013@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "\"629 W 185th St, 2nd Floor\"",
      "zip": "10013"
    },
    {
      "id": "ec1b90fe5f0eca53c684070cd60178b8",
      "name": "Elizabeth G. Campos",
      "email": "elizabeth_g._campos_11217@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "5475252756efee60d139dba70e23550f",
      "name": "Ayman Hassan Elkhouly",
      "email": "ayman_hassan_elkhouly_11379@gmail.com",
      "specilization": "infectiologist",
      "borough": "Flushing",
      "address": "95-42 Roosevelt Avenue",
      "zip": "11379"
    },
    {
      "id": "bb5d0ead7e1e13213e508577d8aba78c",
      "name": "Marievic Villanueva",
      "email": "marievic_villanueva_11213@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "17ffdaccce8632bed7171c4a195e151c",
      "name": "Steven Barkoff",
      "email": "steven_barkoff_11213@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "d01c3143931948d41bbb4d370d165dc0",
      "name": "Jay Bienenfeld",
      "email": "jay_bienenfeld_11224@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Flushing",
      "address": "\"1664 East 14th Street, Suite 401\"",
      "zip": "11224"
    },
    {
      "id": "dbc0848ae39a33554acf69db2b75e4c0",
      "name": "Igor Kirzhner",
      "email": "igor_kirzhner_11217@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "360f7913728a682a715cb87a43559f68",
      "name": "Guo Yong Dai",
      "email": "guo_yong_dai_10032@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "06dc8dc279a2dc54a54b3497b773b066",
      "name": "Llewellyn Hyacinthe",
      "email": "llewellyn_hyacinthe_11230@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "1103 Cortelyou Road",
      "zip": "11230"
    },
    {
      "id": "9899dfca1613dc7ec454a24cc523673e",
      "name": "Mitchell Kaphan",
      "email": "mitchell_kaphan_11356@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "5b168a41a915b362e1ae6990aadd7499",
      "name": "Susheel Kodail",
      "email": "susheel_kodail_10306@gmail.com",
      "specilization": "infectiologist",
      "borough": "Jackson Heights",
      "address": "1655 Richmond Ave",
      "zip": "10306"
    },
    {
      "id": "7e7ed6466c39016925e6b6ee7b3c87a9",
      "name": "Zaric Maja",
      "email": "zaric_maja_11372@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "\"87-81, 169th Street\"",
      "zip": "11372"
    },
    {
      "id": "d52dd1ad05ec924da18213a8f808f4a0",
      "name": "Cary Pollack",
      "email": "cary_pollack_11205@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "252 Driggs Avenue",
      "zip": "11205"
    },
    {
      "id": "151fee05b088ff5962d2a0f00586b7da",
      "name": "Maja Zeric",
      "email": "maja_zeric_10013@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "\"123 Layfayette Street, 6th Floor\"",
      "zip": "10013"
    },
    {
      "id": "12cb038d54ef79d63fa93989ee617544",
      "name": "Bentley Patterson",
      "email": "bentley_patterson_10031@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "470 Lenox Avenue Suite 1p",
      "zip": "10031"
    },
    {
      "id": "60332b9ffdd8a05073f7b2373f22c818",
      "name": "Alfonso Ortiz",
      "email": "alfonso_ortiz_10033@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "\"311 Audubon Ave, 2nd Fl\"",
      "zip": "10033"
    },
    {
      "id": "33e7d1b5a07f11dfd337f3663394821f",
      "name": "Olufunmilayo Adeyanju",
      "email": "olufunmilayo_adeyanju_11354@gmail.com",
      "specilization": "hematologist",
      "borough": "Cedarhurst",
      "address": "\"113-11 Jamaica Ave,\"",
      "zip": "11354"
    },
    {
      "id": "d428e3e0aa813bee4c1a6872f428893b",
      "name": "Eric Bates",
      "email": "eric_bates_10011@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "210 E 86th St",
      "zip": "10011"
    },
    {
      "id": "0d111e98a1dd0330e520cc6582f1274c",
      "name": "Luis Blanco",
      "email": "luis_blanco_10007@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "139 Centre Ave Suite 712",
      "zip": "10007"
    },
    {
      "id": "e5abf7cad6aa067bb86280a0ec08394f",
      "name": "Rafael Bueno",
      "email": "rafael_bueno_11205@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "b94707c3e6647f5cefccff6118934c72",
      "name": "JOHN CAHILL",
      "email": "john_cahill_10011@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "102-11 Roosevelt Avenue",
      "zip": "10011"
    },
    {
      "id": "461d38c349ed9670316f7fb6470a9e16",
      "name": "Annabi Djalo",
      "email": "annabi_djalo_10003@gmail.com",
      "specilization": "oncologist",
      "borough": "Cedarhurst",
      "address": "155 West 19th St",
      "zip": "10003"
    },
    {
      "id": "9a167aa17e04f60b4c9761f20587da3e",
      "name": "Gloria Florez",
      "email": "gloria_florez_10458@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "103 East Burnside Avenue",
      "zip": "10458"
    },
    {
      "id": "2c1f6da32fa695afdc18d85783d2073c",
      "name": "Carl Franzetti",
      "email": "carl_franzetti_11223@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "43-12 43rd Street",
      "zip": "11223"
    },
    {
      "id": "2712a9eedb6609ef01e37855459d0932",
      "name": "Leticia Gonzalez .",
      "email": "leticia_gonzalez_._11693@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "131-24 Rockawaty Blvd",
      "zip": "11693"
    },
    {
      "id": "71af60ec85232965fd8f70512524c133",
      "name": "Jose Goris",
      "email": "jose_goris_10001@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "2201 Amsterdam Avenue",
      "zip": "10001"
    },
    {
      "id": "6000e269d9deedaa8debf555dbeec67f",
      "name": "Jill Groves",
      "email": "jill_groves_11208@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "2091 Nostrand Ave",
      "zip": "11208"
    },
    {
      "id": "55bd5225d518419d96d7696c51f7053f",
      "name": "Luiza Gusenon",
      "email": "luiza_gusenon_10031@gmail.com",
      "specilization": "dermatologist",
      "borough": "Jackson Heights",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "7d868a07da7489a0d43360c81ee3978d",
      "name": "Jermel Hawkins",
      "email": "jermel_hawkins_10021@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Cedarhurst",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "42fb5ad000887791b8fc3da1c9dde75e",
      "name": "Richard Izquierdo",
      "email": "richard_izquierdo_11354@gmail.com",
      "specilization": "diabetologists",
      "borough": "Cedarhurst",
      "address": "80-37 Broadway",
      "zip": "11354"
    },
    {
      "id": "b7b62de935cb7a8147fa3ff528c3674c",
      "name": "Wayne Joseph",
      "email": "wayne_joseph_11373@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Staten Island",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "227afcc57810de420301e8f4c050a20d",
      "name": "Elizabeth Lee-Rey",
      "email": "elizabeth_lee-rey_11355@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "\"42-42 Golden Street, Suite L17\"",
      "zip": "11355"
    },
    {
      "id": "4d3c513e881d0862b1ea181a3da88472",
      "name": "Drepaul Loris",
      "email": "drepaul_loris_11419@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "114-06 Queens Blvd",
      "zip": "11419"
    },
    {
      "id": "6457041c534378bc11981aeeec41084b",
      "name": "Virginia Martinez",
      "email": "virginia_martinez_11377@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "97-03 Springfield Blvd",
      "zip": "11377"
    },
    {
      "id": "0ea8aa4fee6be5bc64a9a2422e085e23",
      "name": "VIRGINIA MARTINEZ",
      "email": "virginia_martinez_11373@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "\"136-21 Roosevelt Ave, Suite #205\"",
      "zip": "11373"
    },
    {
      "id": "484869bb6c4cc8a7ef011305c6bd8414",
      "name": "Frank Maselli",
      "email": "frank_maselli_11217@gmail.com",
      "specilization": "pediatrician",
      "borough": "New York",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "8fb6bf07560d705027d7194f590e0d68",
      "name": "Alma Mesquita",
      "email": "alma_mesquita_11213@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "7220 17th Avenue",
      "zip": "11213"
    },
    {
      "id": "dca98ea2494fa623e15a8bbc1567d16c",
      "name": "Haleh Mohseni",
      "email": "haleh_mohseni_10453@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "1922 McGraw Ave #1B",
      "zip": "10453"
    },
    {
      "id": "4a32be191aa2ea2ab9ad37279ab5df20",
      "name": "Emancia Neil",
      "email": "emancia_neil_10013@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "\"123 Lafayette Street, 6th floor\"",
      "zip": "10013"
    },
    {
      "id": "05443baff0c78fad1fdadd9845047581",
      "name": "Lucy Palomino",
      "email": "lucy_palomino_10016@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "594 Broadway Suite 310",
      "zip": "10016"
    },
    {
      "id": "902f19836c6705d426423badc9c18d72",
      "name": "Vandana Patil",
      "email": "vandana_patil_11220@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "7318 13th Avenue445 Park Avenue",
      "zip": "11220"
    },
    {
      "id": "7e1d97927341e372db2c1510b7376ff7",
      "name": "Marcia Pehr",
      "email": "marcia_pehr_11368@gmail.com",
      "specilization": "general practitioner",
      "borough": "Flushing",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "47db174f1381ca09c1ba58b2d46ff9b9",
      "name": "Venkata Ravi",
      "email": "venkata_ravi_10033@gmail.com",
      "specilization": "dermatologist",
      "borough": "Staten Island",
      "address": "35 East 35th Street",
      "zip": "10033"
    },
    {
      "id": "6231eeefeccc5ad41885f17f6831669a",
      "name": "Ashley Ray",
      "email": "ashley_ray_10453@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "05ff037ba5ec64f2ceadec69c28ed56c",
      "name": "Karen Rigor Tarite",
      "email": "karen_rigor_tarite_10458@gmail.com",
      "specilization": "urologist",
      "borough": "Staten Island",
      "address": "2386 Jerome Avenue",
      "zip": "10458"
    },
    {
      "id": "6d50627af6c4fcef4010f05f223685e5",
      "name": "Ali Saleh",
      "email": "ali_saleh_11203@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "450 Clarkson Ave",
      "zip": "11203"
    },
    {
      "id": "b48fddf990aa4c232595d4fcd248541e",
      "name": "Ludmila Sedlackova",
      "email": "ludmila_sedlackova_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "Staten Island",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "04da48b9a26c78b54e43836e2d89efba",
      "name": "Archana Singiri",
      "email": "archana_singiri_11220@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Staten Island",
      "address": "81 Skillman Street",
      "zip": "11220"
    },
    {
      "id": "897f73637af51e50bd8149e1d23591a2",
      "name": "S Tokar",
      "email": "s_tokar_11516@gmail.com",
      "specilization": "gynecologist",
      "borough": "New York",
      "address": "110-45 Queens Boulevard Suite A",
      "zip": "11516"
    },
    {
      "id": "d65834b3a9018334db59ed0d2eccd611",
      "name": "Janette Torres",
      "email": "janette_torres_10033@gmail.com",
      "specilization": "hematologist",
      "borough": "Queens",
      "address": "\"311 Audubon Ave, 2nd Fl\"",
      "zip": "10033"
    },
    {
      "id": "11a944b9b8f32142b733cb598b515308",
      "name": "Roger Villi",
      "email": "roger_villi_11691@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "64-17 Broadway",
      "zip": "11691"
    },
    {
      "id": "8c751edc30d79a70f4a57334f19cfcab",
      "name": "Jennifer Figueroa",
      "email": "jennifer_figueroa_10031@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "\"41 Mott Street, Chinatown\"",
      "zip": "10031"
    },
    {
      "id": "1fb8bd05ad93287289bde8261e34109d",
      "name": "Rawand Khader",
      "email": "rawand_khader_10013@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "128 Mott Street",
      "zip": "10013"
    },
    {
      "id": "979a367005d35ab59825313a898d6491",
      "name": "Boris Chusid",
      "email": "boris_chusid_11373@gmail.com",
      "specilization": "toxicologists",
      "borough": "Cedarhurst",
      "address": "131-06 Liberty Ave",
      "zip": "11373"
    },
    {
      "id": "1fc659931a750e42d210dc5ae01ff6d3",
      "name": "Vera Antonios",
      "email": "vera_antonios_11354@gmail.com",
      "specilization": "surgeon",
      "borough": "Flushing",
      "address": "219-49 Jamaica Avenue",
      "zip": "11354"
    },
    {
      "id": "19b18f4375e4320ad8a0a50a90f7f27e",
      "name": "Muhammad Adam",
      "email": "muhammad_adam_11205@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "7513 Ft. Hamilton Pky",
      "zip": "11205"
    },
    {
      "id": "b70ad33fe6a07ecb6d3a1ffc9be211a3",
      "name": "Adenike Adeyemo",
      "email": "adenike_adeyemo_10016@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "\"571 Academy Street, Apt. GLE\"",
      "zip": "10016"
    },
    {
      "id": "24188e013fec660b93d4d2387a879c2c",
      "name": "Kishore Ahuja",
      "email": "kishore_ahuja_11374@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Queens",
      "address": "8801 Parsons Blvd",
      "zip": "11374"
    },
    {
      "id": "e34cdf1d0ff3a21733392dec97490ba6",
      "name": "Vijay Alla",
      "email": "vijay_alla_10469@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "1163 Manor Avenue",
      "zip": "10469"
    },
    {
      "id": "3e2326ce7a089962c8dd327484a44200",
      "name": "Reynaldo Alonso",
      "email": "reynaldo_alonso_11201@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "2503 Church Ave",
      "zip": "11201"
    },
    {
      "id": "d006d5b7ea02673da48f96e732dcfb5a",
      "name": "Joseph Andrade",
      "email": "joseph_andrade_11354@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "133-38 41st Rd Suite 2C",
      "zip": "11354"
    },
    {
      "id": "4b0ad329f6063312fc914fc2f89561ed",
      "name": "Subha Atluri",
      "email": "subha_atluri_11372@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "5583792d01b5c1407b2fdc0df8697fdd",
      "name": "Mihir Basu",
      "email": "mihir_basu_11234@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "1835 Bay Ridge Pkway",
      "zip": "11234"
    },
    {
      "id": "5b00d80b96052b2d320adc4c6d199ad8",
      "name": "Chrystian Belliard",
      "email": "chrystian_belliard_10032@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "b8bd95e2145d97c07865fe2323c25fc5",
      "name": "Vinod Bhagat",
      "email": "vinod_bhagat_10032@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "27d0a70e740cd04f8854c64d759636e9",
      "name": "Robert Bressner",
      "email": "robert_bressner_10021@gmail.com",
      "specilization": "general practitioner",
      "borough": "Jackson Heights",
      "address": "121A West 20th Street",
      "zip": "10021"
    },
    {
      "id": "63a55f86a382b444c1c5d89421bbecfe",
      "name": "Cecilia Calderon",
      "email": "cecilia_calderon_10075@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "185 West End Ave",
      "zip": "10075"
    },
    {
      "id": "db7e215a5ff72529bc1ca27839316be8",
      "name": "Ruben Carvajal",
      "email": "ruben_carvajal_10010@gmail.com",
      "specilization": "dermatologist",
      "borough": "Cedarhurst",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "726b91081ca726439a7664f6870d36e2",
      "name": "Ermany Castillon",
      "email": "ermany_castillon_11354@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "241-08 140th Ave",
      "zip": "11354"
    },
    {
      "id": "bc114536f0f95b789e04cb9af15f8e8b",
      "name": "Mehmet Cetin",
      "email": "mehmet_cetin_11355@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "75-06 ELIOT AVE",
      "zip": "11355"
    },
    {
      "id": "8d7d01107c6523561d7f4c17fbce59df",
      "name": "Stephanie Chambers",
      "email": "stephanie_chambers_11213@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "124 E 43rd St",
      "zip": "11213"
    },
    {
      "id": "f3aa60da6cf821c5d57c637979bb9e5d",
      "name": "Jonathan Chang",
      "email": "jonathan_chang_11230@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "1103 Cortelyou Road",
      "zip": "11230"
    },
    {
      "id": "2994135080f953d245fb95e27910a595",
      "name": "Alcedo Cruz",
      "email": "alcedo_cruz_11373@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "47-17 157 STREET",
      "zip": "11373"
    },
    {
      "id": "d1d1f7d423f16dcff3fab1dc73e59361",
      "name": "Provat Das",
      "email": "provat_das_11691@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "00697baf84ab4377cbf4239ff768387f",
      "name": "Ashoke Kumar Das",
      "email": "ashoke_kumar_das_11355@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "90-01 A Rosevelt Ave.",
      "zip": "11355"
    },
    {
      "id": "d7f7de21faf50a2d02efccbfcf71ba78",
      "name": "Samuel DeLeon",
      "email": "samuel_deleon_11203@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "2378 Ralph Ave",
      "zip": "11203"
    },
    {
      "id": "ca1978e4ec2fd21e4a7041c3884dd86f",
      "name": "Alan Diaz",
      "email": "alan_diaz_11373@gmail.com",
      "specilization": "urologist",
      "borough": "Cedarhurst",
      "address": "13176 Laurelton Parkway",
      "zip": "11373"
    },
    {
      "id": "e29051bca55195fba94785c559e64147",
      "name": "Loris Omesh Drepaul",
      "email": "loris_omesh_drepaul_11203@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "1718 Pitkin Avenue",
      "zip": "11203"
    },
    {
      "id": "77288ed2e8e5db6c2d2b992ae9428e25",
      "name": "Ernst Ducena",
      "email": "ernst_ducena_11203@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Jackson Heights",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "bb0423eeeff9e53cc8f625bc15d00ea7",
      "name": "Pulle Dunstan Ferando",
      "email": "pulle_dunstan_ferando_11203@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "354 Monroe Place",
      "zip": "11203"
    },
    {
      "id": "df07b93f22087a8d0f65c42e546f66f6",
      "name": "Reina Eisner",
      "email": "reina_eisner_11238@gmail.com",
      "specilization": "surgeon",
      "borough": "Queens",
      "address": "5722 7th ave",
      "zip": "11238"
    },
    {
      "id": "7bf64182e6d4e14764d75cc8c0509bbf",
      "name": "Mohamad Erfani",
      "email": "mohamad_erfani_11432@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "\"97-77 Queens Blvd. Suite 900,\"",
      "zip": "11432"
    },
    {
      "id": "cc22a2897ef4f27ca7876c9fee1ede78",
      "name": "Darren Esposito",
      "email": "darren_esposito_11211@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "New York",
      "address": "562 East 93rd Street",
      "zip": "11211"
    },
    {
      "id": "fd6f031b2236f4dd7897fb87f8520fb7",
      "name": "S Gandhi",
      "email": "s_gandhi_11224@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "833 58th Street",
      "zip": "11224"
    },
    {
      "id": "f771d5e916bcf03f2f19a4cd306cf7ed",
      "name": "Himanshu Goel",
      "email": "himanshu_goel_11219@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "753 Classon Avenue Suite LJ",
      "zip": "11219"
    },
    {
      "id": "f9d1d4597941010aad274f74d2404129",
      "name": "Owen Golden",
      "email": "owen_golden_11211@gmail.com",
      "specilization": "surgeon",
      "borough": "Cedarhurst",
      "address": "140 Clinton Street",
      "zip": "11211"
    },
    {
      "id": "d19d07be351fc359bef9898468f26f67",
      "name": "Fausto Gonzalez",
      "email": "fausto_gonzalez_10031@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "125 East 86th Street",
      "zip": "10031"
    },
    {
      "id": "d3e0b7eccd6ba329b71566fefd2fb31e",
      "name": "Patricia Gregory",
      "email": "patricia_gregory_10028@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Staten Island",
      "address": "\"139 centre street, #505\"",
      "zip": "10028"
    },
    {
      "id": "20e83aefb9e6eb386da46f375ce56094",
      "name": "LUIS GUERRERO",
      "email": "luis_guerrero_10032@gmail.com",
      "specilization": "nephrologist",
      "borough": "Staten Island",
      "address": "63 Catherine St.",
      "zip": "10032"
    },
    {
      "id": "55c1cd1d00fcfffe61966f16ebf5b42c",
      "name": "Rafael Guillen",
      "email": "rafael_guillen_11354@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "60-14 Roosevelt Ave",
      "zip": "11354"
    },
    {
      "id": "1b3b1e3d787e7a96aac531d409c74e61",
      "name": "Sindhu Gupta",
      "email": "sindhu_gupta_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "a644b4a706a75a29bd1a66395dc504a9",
      "name": "Rodolfo Guzman",
      "email": "rodolfo_guzman_10013@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "121 East 60th Street",
      "zip": "10013"
    },
    {
      "id": "3df7c82fd1dae4ed749df0cb75566dea",
      "name": "Rameen Hashemiyoon",
      "email": "rameen_hashemiyoon_10458@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "1070 Southern Blvd",
      "zip": "10458"
    },
    {
      "id": "f1465a16333117459e48d8665e600586",
      "name": "Maria Del Carmen Hidalgo",
      "email": "maria_del_carmen_hidalgo_10027@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "616 West 184th Street",
      "zip": "10027"
    },
    {
      "id": "32a0766c17c1c8101d7ed31861d3897c",
      "name": "Howard Hochster",
      "email": "howard_hochster_11372@gmail.com",
      "specilization": "rheumatologist",
      "borough": "New York",
      "address": "4543 43rd Street",
      "zip": "11372"
    },
    {
      "id": "5fcc9408b4fa05e751ef87491d496691",
      "name": "Julius Johnson",
      "email": "julius_johnson_10016@gmail.com",
      "specilization": "allergologists",
      "borough": "Brooklyn",
      "address": "39 East Broadway Suite 307",
      "zip": "10016"
    },
    {
      "id": "a9c82b68fd5ed5234f0189ee9cc36a30",
      "name": "Jun Kang",
      "email": "jun_kang_11418@gmail.com",
      "specilization": "oncologist",
      "borough": "Brooklyn",
      "address": "30-96 51 STREET",
      "zip": "11418"
    },
    {
      "id": "ca09b05c75cf5b38a4357955410b285e",
      "name": "Ajith Karayil",
      "email": "ajith_karayil_10013@gmail.com",
      "specilization": "cardiologist",
      "borough": "Jackson Heights",
      "address": "231 SHERMAN AVENUE #1F",
      "zip": "10013"
    },
    {
      "id": "38be23faa9be447d5f4eade98c1394ca",
      "name": "Aylin Kiyici",
      "email": "aylin_kiyici_11203@gmail.com",
      "specilization": "infectiologist",
      "borough": "Manhattan",
      "address": "2378 Ralph Ave",
      "zip": "11203"
    },
    {
      "id": "85da614516b8cd016bab227e2e64dc07",
      "name": "Ndeye Kone",
      "email": "ndeye_kone_11208@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "432 Bedford Avenue",
      "zip": "11208"
    },
    {
      "id": "97bdd854a3c3d94c83a5f0cbf3e62fdd",
      "name": "Jean Robert Macenat",
      "email": "jean_robert_macenat_11402@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "103-14 Lefferts Blvd",
      "zip": "11402"
    },
    {
      "id": "daea7076ba613680883fef232dbbf849",
      "name": "Manuel Mejia",
      "email": "manuel_mejia_11356@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "969b9cc7bdb86244b4cbad90134c3a18",
      "name": "Angelo D. Michilli",
      "email": "angelo_d._michilli_11211@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "54209d49f06a85da900aec2eb1c7cfdc",
      "name": "Caesar Mimieux",
      "email": "caesar_mimieux_10467@gmail.com",
      "specilization": "allergologists",
      "borough": "Jackson Heights",
      "address": "2847 Webster Avenue",
      "zip": "10467"
    },
    {
      "id": "4619eedecb2a4bc74e17fc27a91f2c14",
      "name": "Joseph Mintah",
      "email": "joseph_mintah_11203@gmail.com",
      "specilization": "pediatrician",
      "borough": "Bronx",
      "address": "121-02 Hillside Avenue",
      "zip": "11203"
    },
    {
      "id": "f67ac0d21bcc8da15bb0159c783a49f9",
      "name": "Masoud Moarefi",
      "email": "masoud_moarefi_11374@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "94-11 59th Avenue Suite A-10",
      "zip": "11374"
    },
    {
      "id": "5976d396cedb18b7a308bda6c8e53ef4",
      "name": "Marcia Morgan",
      "email": "marcia_morgan_11230@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "258 Henry Street",
      "zip": "11230"
    },
    {
      "id": "c2cd8d1ac1320489b04d8819846b1cb6",
      "name": "Shervin Mortazavi",
      "email": "shervin_mortazavi_10453@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Cedarhurst",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "7ac3e0146fea55798d14fd3db720e361",
      "name": "Kenneth Nyer",
      "email": "kenneth_nyer_10451@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Staten Island",
      "address": "2960 Grand Concourse L1",
      "zip": "10451"
    },
    {
      "id": "a5a45bf6e8dcd89380c657c5269727d7",
      "name": "Domenic Onyema",
      "email": "domenic_onyema_11206@gmail.com",
      "specilization": "nephrologist",
      "borough": "Queens",
      "address": "81 IRVING PLACE",
      "zip": "11206"
    },
    {
      "id": "ba3f93b2cefad7dfabc50228206ed361",
      "name": "Yvette Ortiz",
      "email": "yvette_ortiz_11356@gmail.com",
      "specilization": "infectiologist",
      "borough": "Queens",
      "address": "4434 Amboy Road",
      "zip": "11356"
    },
    {
      "id": "4ab4a6eb0b68a201268a7dcebc0db0db",
      "name": "Luis Ortiz",
      "email": "luis_ortiz_10034@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "707 West 171st Suite A",
      "zip": "10034"
    },
    {
      "id": "e281fae57a773858ffdf15d65aad49ef",
      "name": "George Owusu",
      "email": "george_owusu_11205@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Flushing",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "8445e89effa2e0d916d84b51c3864f43",
      "name": "Enrique Pagan",
      "email": "enrique_pagan_11355@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "43-20A Roosevelt Avenue",
      "zip": "11355"
    },
    {
      "id": "cca9e9f984c1eba77e089e78205e380d",
      "name": "Rasik Lal Patel",
      "email": "rasik_lal_patel_10030@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "0cd758a07ff17d4c2988f0a556203b27",
      "name": "Nisha Patel",
      "email": "nisha_patel_11205@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "1664 EAST 14TH STREET 4TH FLOOR",
      "zip": "11205"
    },
    {
      "id": "dd0dca11c61fe5c793eecdd4590b85c9",
      "name": "CHAULA PATEL",
      "email": "chaula_patel_10021@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "18-12 College Point Blvd",
      "zip": "10021"
    },
    {
      "id": "66cc245f97a6ea1028a9685ab1612f90",
      "name": "BABU PATEL",
      "email": "babu_patel_11372@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "edbcaf66b32b9f265b0d449420822bb0",
      "name": "Madan Paul",
      "email": "madan_paul_11432@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Queens",
      "address": "136-20 38th Ave",
      "zip": "11432"
    },
    {
      "id": "8c20dca034430640c0d884098c753f38",
      "name": "EMMANUEL PEPRAH",
      "email": "emmanuel_peprah_10040@gmail.com",
      "specilization": "urologist",
      "borough": "Jackson Heights",
      "address": "9 East 63rd Street",
      "zip": "10040"
    },
    {
      "id": "6ac214588d01d160358fbd2327095f63",
      "name": "Maria Perea-Barbosa",
      "email": "maria_perea-barbosa_11220@gmail.com",
      "specilization": "pediatrician",
      "borough": "Flushing",
      "address": "1421 Carroll Street",
      "zip": "11220"
    },
    {
      "id": "6125602b0b0ddd861f0725769efebb6a",
      "name": "Luisa Perez",
      "email": "luisa_perez_11372@gmail.com",
      "specilization": "diabetologists",
      "borough": "Jackson Heights",
      "address": "\"87-81, 169th Street\"",
      "zip": "11372"
    },
    {
      "id": "5e080c5d0272d5a59e3ac64f451f2f3e",
      "name": "Cynthia Sudar Singh Prabahar",
      "email": "cynthia_sudar_singh_prabahar_11203@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "167 Rutledge St",
      "zip": "11203"
    },
    {
      "id": "8f72c92d6eaab57c8f5688f0ba781518",
      "name": "Edwin Quinones",
      "email": "edwin_quinones_11420@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "104-14 113 ST",
      "zip": "11420"
    },
    {
      "id": "53510aa1ab351c6bdb263d28764aaee4",
      "name": "Edwin Quinones",
      "email": "edwin_quinones_10013@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "20 Park Avenue",
      "zip": "10013"
    },
    {
      "id": "254b7bd31b605003d784a74865bea55c",
      "name": "Ilora Rafique",
      "email": "ilora_rafique_10453@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "0feeeaa645c8a201cfaa5be5983c1847",
      "name": "Julio Ramirez",
      "email": "julio_ramirez_10457@gmail.com",
      "specilization": "general practitioner",
      "borough": "Bronx",
      "address": "1963-A DALY AVE",
      "zip": "10457"
    },
    {
      "id": "e7948f61ab52fe333bc9d7eda1c06b2a",
      "name": "Khader Rawand",
      "email": "khader_rawand_11209@gmail.com",
      "specilization": "toxicologists",
      "borough": "Staten Island",
      "address": "\"1664 East 14th Street, Suite 501\"",
      "zip": "11209"
    },
    {
      "id": "420eb4942392ec75937e3c431f0b63e0",
      "name": "Fe T. Reyes-Arcangel",
      "email": "fe_t._reyes-arcangel_11212@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "3016 Glenwood Rd",
      "zip": "11212"
    },
    {
      "id": "714d6daeac59ee64ebb0a1c3418d34b0",
      "name": "Sumir Sahgal",
      "email": "sumir_sahgal_11232@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "5303 8TH AVENUE",
      "zip": "11232"
    },
    {
      "id": "ebd7feaeeefeb52a09164f935af29a2f",
      "name": "Nedal Samarneh",
      "email": "nedal_samarneh_11355@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "457f8797f6efabf956222136b4645ff5",
      "name": "Domingo Santana",
      "email": "domingo_santana_11355@gmail.com",
      "specilization": "pulmonologist",
      "borough": "New York",
      "address": "75-06 ELIOT AVE",
      "zip": "11355"
    },
    {
      "id": "4d5cca33658b6cdbed1347a48ca1270d",
      "name": "Amit Saxena",
      "email": "amit_saxena_10002@gmail.com",
      "specilization": "general practitioner",
      "borough": "Flushing",
      "address": "345 E37th Street Ste 303C",
      "zip": "10002"
    },
    {
      "id": "34447bb9b550412636f9973f96aaa05f",
      "name": "Aline Shehigian",
      "email": "aline_shehigian_10028@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "58 E. 116th St",
      "zip": "10028"
    },
    {
      "id": "bb2b22fda11e92d4a91836eedbe8d692",
      "name": "Stephan Simons",
      "email": "stephan_simons_10453@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "1931 Williamsbridge Road",
      "zip": "10453"
    },
    {
      "id": "521e53451cf8eb913a5d230c6e267bd6",
      "name": "Stephan Simons",
      "email": "stephan_simons_11211@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "1455 East 24th Street",
      "zip": "11211"
    },
    {
      "id": "d37789c927fc4888dbe1c3e4ec30d833",
      "name": "Atkuri Subah",
      "email": "atkuri_subah_11203@gmail.com",
      "specilization": "gynecologist",
      "borough": "Manhattan",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "1488ec0a873b79585272c453e5eb9b24",
      "name": "ROBERT TAGLIA",
      "email": "robert_taglia_10028@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "210 East 86 Street",
      "zip": "10028"
    },
    {
      "id": "8d6cd5999608f2dd080c59b3e8fd0244",
      "name": "Ramon Tallaj",
      "email": "ramon_tallaj_10033@gmail.com",
      "specilization": "nephrologist",
      "borough": "New York",
      "address": "45 EAST 85 STREET",
      "zip": "10033"
    },
    {
      "id": "65144aa4cfc607f7f1c625e481fdd81c",
      "name": "Stellios Trikounakis",
      "email": "stellios_trikounakis_10034@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Bronx",
      "address": "155 W. 19th St 4th floor",
      "zip": "10034"
    },
    {
      "id": "4be591d267b6d42ac2387debb7e37de1",
      "name": "Bill Wagner",
      "email": "bill_wagner_11411@gmail.com",
      "specilization": "allergologists",
      "borough": "Flushing",
      "address": "131-76 Laurelton Parkway",
      "zip": "11411"
    },
    {
      "id": "321b9dae1ea69d2b48c5b12a37b4e28e",
      "name": "David Weiss",
      "email": "david_weiss_10453@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "d2db7e8361a0e6aa4bbd841730de0680",
      "name": "Kim Woods",
      "email": "kim_woods_10457@gmail.com",
      "specilization": "dermatologist",
      "borough": "Flushing",
      "address": "1250 Shakespeare Avenue",
      "zip": "10457"
    },
    {
      "id": "150381200142056a8b16f22535983ca8",
      "name": "Alex Wright",
      "email": "alex_wright_10013@gmail.com",
      "specilization": "psychologist",
      "borough": "Staten Island",
      "address": "\"3410-18 Broadway, 2nd floor\"",
      "zip": "10013"
    },
    {
      "id": "5361cb8b82561d01ee24770c7c51ed48",
      "name": "Daniel Zakhary",
      "email": "daniel_zakhary_11374@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "9851 QUEENS BLVD",
      "zip": "11374"
    },
    {
      "id": "bf3277c4e03660a1f8551915aff1f9cd",
      "name": "Louisa Ziglar",
      "email": "louisa_ziglar_10011@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Jackson Heights",
      "address": "820 2nd Ave",
      "zip": "10011"
    },
    {
      "id": "e26ff942c4b8f30553429c89386a6ae7",
      "name": "Stephen Zinnanti",
      "email": "stephen_zinnanti_10467@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "c2754f4d497e7b6d7c5ddaa74ac968d6",
      "name": "Iqbal Merchant",
      "email": "iqbal_merchant_11354@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "112-03 Queens Blvd",
      "zip": "11354"
    },
    {
      "id": "5248b44dda826a38553c82d2d9428069",
      "name": "Kuldip Sachdev",
      "email": "kuldip_sachdev_10466@gmail.com",
      "specilization": "pediatrician",
      "borough": "Brooklyn",
      "address": "2034 Benedict Avenue",
      "zip": "10466"
    },
    {
      "id": "0861d985f3c440739ae78b0ec239859e",
      "name": "Frank Arbucci",
      "email": "frank_arbucci_11375@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "164-08 65th Ave",
      "zip": "11375"
    },
    {
      "id": "3ff21fa92e5a7537af56457b3392292d",
      "name": "Nereida Correa",
      "email": "nereida_correa_11375@gmail.com",
      "specilization": "toxicologists",
      "borough": "Brooklyn",
      "address": "164-08 65th Ave",
      "zip": "11375"
    },
    {
      "id": "2e343164c8311e951e34ea36f4482b1b",
      "name": "Jacob Esses",
      "email": "jacob_esses_10010@gmail.com",
      "specilization": "surgeon",
      "borough": "Brooklyn",
      "address": "464 West 145th Street",
      "zip": "10010"
    },
    {
      "id": "05abbe86a4f26fbb3eccef548ca316b7",
      "name": "Donna Henry",
      "email": "donna_henry_11692@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "\"133-29 41st Rd, 2D\"",
      "zip": "11692"
    },
    {
      "id": "708e90b8499141209c14a114f30536d0",
      "name": "Susan Merguerian",
      "email": "susan_merguerian_11368@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "\"112-03 Queens Blvd, Suite 207\"",
      "zip": "11368"
    },
    {
      "id": "86ef848cfa1e9645c5e8b8a2a6f5cbfe",
      "name": "Gloria Murray",
      "email": "gloria_murray_10013@gmail.com",
      "specilization": "pediatrician",
      "borough": "Manhattan",
      "address": "\"123 Layfayette Street, 6th Floor\"",
      "zip": "10013"
    },
    {
      "id": "8f3195f50838931db5e81a4e7b6c3490",
      "name": "Raphael Novogrodsky",
      "email": "raphael_novogrodsky_11211@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "1153 58th Street",
      "zip": "11211"
    },
    {
      "id": "8a57cf4bec61aff8d9a42d2200e994ec",
      "name": "Olive Osborne",
      "email": "olive_osborne_10021@gmail.com",
      "specilization": "gynecologist",
      "borough": "Cedarhurst",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "a8da488ef6529dca52f062d613721630",
      "name": "Chana Lieber",
      "email": "chana_lieber_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "Staten Island",
      "address": "375 East Fordham Road",
      "zip": "10453"
    },
    {
      "id": "b055a02d56586fc589a1ab126fb769a6",
      "name": "Michael Ader",
      "email": "michael_ader_11042@gmail.com",
      "specilization": "infectiologist",
      "borough": "Staten Island",
      "address": "87-81 169th St",
      "zip": "11042"
    },
    {
      "id": "47dd5edb31ced460647685a42487032b",
      "name": "Yoram Amsalem",
      "email": "yoram_amsalem_11219@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "\"763 56th Street, 1st floor\"",
      "zip": "11219"
    },
    {
      "id": "278c4cbbc54b1d8a6bb8848fa2b3b8c8",
      "name": "Sean Byrne",
      "email": "sean_byrne_10453@gmail.com",
      "specilization": "general practitioner",
      "borough": "Flushing",
      "address": "\"2385 Arthur Avenue, Suite 206\"",
      "zip": "10453"
    },
    {
      "id": "d07906ccea4a3d80945501c2de119508",
      "name": "Dassa Gabriel",
      "email": "dassa_gabriel_11355@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "29-28 41st Avenue",
      "zip": "11355"
    },
    {
      "id": "659b69e39a2f023be43c7ccc30d3f941",
      "name": "Edward Geisler",
      "email": "edward_geisler_10032@gmail.com",
      "specilization": "gynecologist",
      "borough": "Jackson Heights",
      "address": "4250 Broadway Suite 1C",
      "zip": "10032"
    },
    {
      "id": "24e22df933206f9319a6319fcb97671d",
      "name": "Jeremy Gutwein",
      "email": "jeremy_gutwein_10467@gmail.com",
      "specilization": "psychologist",
      "borough": "Brooklyn",
      "address": "2015 Grand Concourse",
      "zip": "10467"
    },
    {
      "id": "f76e0f3d4be0dd3e24b04055ece72f6e",
      "name": "Isadore Gutwein",
      "email": "isadore_gutwein_11354@gmail.com",
      "specilization": "psychologist",
      "borough": "Queens",
      "address": "80-37 Broadway",
      "zip": "11354"
    },
    {
      "id": "6951459372fa1d335efaaa454d33b35c",
      "name": "Patricia Halton",
      "email": "patricia_halton_11355@gmail.com",
      "specilization": "toxicologists",
      "borough": "New York",
      "address": "29-28 41st Avenue",
      "zip": "11355"
    },
    {
      "id": "4804342eff5a5858b4f227e319a45597",
      "name": "Rudabah Hasan",
      "email": "rudabah_hasan_10030@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Jackson Heights",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "418055ba373284092a4ea9880415fffb",
      "name": "Dina Kornblau",
      "email": "dina_kornblau_11432@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "136-20 38th Ave",
      "zip": "11432"
    },
    {
      "id": "88774a99a8605b12495e32b88bd9ea5a",
      "name": "Mandy Marantz",
      "email": "mandy_marantz_11377@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "87-04 Rockaway Beach Blvd",
      "zip": "11377"
    },
    {
      "id": "85cd4f01f288dcb870d6f0b56f4e03cc",
      "name": "Charles Nordin",
      "email": "charles_nordin_10312@gmail.com",
      "specilization": "allergologists",
      "borough": "Bronx",
      "address": "2248 Richmond Road",
      "zip": "10312"
    },
    {
      "id": "06d1ef8fc12ce1c473ed7398721cefdc",
      "name": "Jason Ogiste",
      "email": "jason_ogiste_11212@gmail.com",
      "specilization": "infectiologist",
      "borough": "Cedarhurst",
      "address": "450 clarkson ave",
      "zip": "11212"
    },
    {
      "id": "efc28a6b954fc6b4a603202bbe6d1024",
      "name": "Joshua Pollacil",
      "email": "joshua_pollacil_11103@gmail.com",
      "specilization": "infectiologist",
      "borough": "Brooklyn",
      "address": "6638 FOREST AVENUE",
      "zip": "11103"
    },
    {
      "id": "8b94c5059edd213deaf8571b1ce6d210",
      "name": "Rajendra RAMPERSAUD",
      "email": "rajendra_rampersaud_10458@gmail.com",
      "specilization": "diabetologists",
      "borough": "Manhattan",
      "address": "2426 Eastchester Road",
      "zip": "10458"
    },
    {
      "id": "0f5d47c147de6c13a841332a3a1609a1",
      "name": "Daniel Reich",
      "email": "daniel_reich_11211@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "b3dfd900ea0c9dc3268b11152dcfd335",
      "name": "Daniel Reich",
      "email": "daniel_reich_11204@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "\"839 58th Street, 2nd Floor\"",
      "zip": "11204"
    },
    {
      "id": "fb6cb64b6bd1fe5b4d8ae9c746186740",
      "name": "Robert Sable",
      "email": "robert_sable_11367@gmail.com",
      "specilization": "pediatrician",
      "borough": "Jackson Heights",
      "address": "2922 30TH AVENUE",
      "zip": "11367"
    },
    {
      "id": "9f935519b8587e95540ffa700d27a824",
      "name": "Aleksander Shalshin",
      "email": "aleksander_shalshin_10030@gmail.com",
      "specilization": "allergologists",
      "borough": "Bronx",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "41fd6ee60554cc3045c8616bf5b1ed9a",
      "name": "Alyson Smith",
      "email": "alyson_smith_11377@gmail.com",
      "specilization": "psychologist",
      "borough": "Cedarhurst",
      "address": "\"410 Lakeville Road, Suite 202\"",
      "zip": "11377"
    },
    {
      "id": "957a50e3fbcf697a003e54bb68e875ef",
      "name": "David Stein",
      "email": "david_stein_11230@gmail.com",
      "specilization": "diabetologists",
      "borough": "Bronx",
      "address": "\"1545 Atlantic Avenue, Suite 108\"",
      "zip": "11230"
    },
    {
      "id": "8a5be79d27ca49d7661030d3cc7ffeee",
      "name": "Leonardo Vando",
      "email": "leonardo_vando_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "\"822 54th Street, 1Flr133-19 41st. Road, 1F\"",
      "zip": "11220"
    },
    {
      "id": "f84b051522103c5f196520f134a78399",
      "name": "Arnold Wilson",
      "email": "arnold_wilson_10034@gmail.com",
      "specilization": "surgeon",
      "borough": "Manhattan",
      "address": "118 Baxter Street",
      "zip": "10034"
    },
    {
      "id": "9bfbb73537513bd8c746389b744cd5b1",
      "name": "Lourdes Aguayo",
      "email": "lourdes_aguayo_11203@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "f57e022715ae4c8af0a4ae24fecda78e",
      "name": "Rita Ahuja",
      "email": "rita_ahuja_10460@gmail.com",
      "specilization": "psychologist",
      "borough": "Jackson Heights",
      "address": "Doctors Office",
      "zip": "10460"
    },
    {
      "id": "98ce56be8c2ac7a19edbc2f8883597e2",
      "name": "Taiye Apoeso",
      "email": "taiye_apoeso_10451@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "2960 Grand Concourse L1",
      "zip": "10451"
    },
    {
      "id": "ad5d0693fd0d1b5e6d2227d956ef22a2",
      "name": "Jude Arthur",
      "email": "jude_arthur_10003@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "\"48 Market St., Suite B\"",
      "zip": "10003"
    },
    {
      "id": "39a9d3e4a5f4d885e883ddcf26ee1b31",
      "name": "Baah Asante",
      "email": "baah_asante_10453@gmail.com",
      "specilization": "oncologist",
      "borough": "New York",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "a8bc5226ad57cb1e3b049bc0f7f96cc8",
      "name": "Mohammad Azam",
      "email": "mohammad_azam_10033@gmail.com",
      "specilization": "hematologist",
      "borough": "Bronx",
      "address": "14 East 4th Street",
      "zip": "10033"
    },
    {
      "id": "66a0245c681e80aa75313e89d80b5a24",
      "name": "Julissa Baez",
      "email": "julissa_baez_11220@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "5303 8th ave",
      "zip": "11220"
    },
    {
      "id": "58b26df97d831ba2de60e927c0116735",
      "name": "Mercedes Blanche",
      "email": "mercedes_blanche_11219@gmail.com",
      "specilization": "general practitioner",
      "borough": "Queens",
      "address": "775 57th Street",
      "zip": "11219"
    },
    {
      "id": "f3106674180e83f06ee81a21a2ce2d07",
      "name": "Paula Carugno",
      "email": "paula_carugno_11103@gmail.com",
      "specilization": "hematologist",
      "borough": "Brooklyn",
      "address": "93-20 A Roosevelt Avenue",
      "zip": "11103"
    },
    {
      "id": "3f59290e34f9d0a899f41c576442118a",
      "name": "Veena Chadda",
      "email": "veena_chadda_10001@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Cedarhurst",
      "address": "2201 Amsterdam Avenue",
      "zip": "10001"
    },
    {
      "id": "f0d4cfb1e480005f5ca16cafc1f1c3e8",
      "name": "Nina Chao",
      "email": "nina_chao_11219@gmail.com",
      "specilization": "urologist",
      "borough": "Manhattan",
      "address": "8000 4th avenue",
      "zip": "11219"
    },
    {
      "id": "b7b28913ab4f789b865e4e94514c909b",
      "name": "Thapvongse Chin",
      "email": "thapvongse_chin_10453@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Manhattan",
      "address": "3071 Perry Avenue",
      "zip": "10453"
    },
    {
      "id": "cab10874249838c5cc1301ff2e677f21",
      "name": "Belkis Colon",
      "email": "belkis_colon_10472@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "\"2270 University Avenue, Suite 1A\"",
      "zip": "10472"
    },
    {
      "id": "7c26d0347c12762c999c51549171f52a",
      "name": "Delsa Compres",
      "email": "delsa_compres_10030@gmail.com",
      "specilization": "cardiologist",
      "borough": "Flushing",
      "address": "600 West 150th Street",
      "zip": "10030"
    },
    {
      "id": "c420cfe7b0fe39b8a0f4c84fb0d06de5",
      "name": "Jorge Cornielle",
      "email": "jorge_cornielle_11220@gmail.com",
      "specilization": "toxicologists",
      "borough": "Bronx",
      "address": "\"160 Parkside Ave, Suite 1D\"",
      "zip": "11220"
    },
    {
      "id": "6b7046797c9ff9a52270a2224afdb95b",
      "name": "Arpita Datta",
      "email": "arpita_datta_11220@gmail.com",
      "specilization": "psychologist",
      "borough": "New York",
      "address": "\"730 58th Street, 1F\"",
      "zip": "11220"
    },
    {
      "id": "efa487e3d37f3dcf6dfbde425ec5675e",
      "name": "Maria Diaz",
      "email": "maria_diaz_11221@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "3709 9th Street",
      "zip": "11221"
    },
    {
      "id": "fa1ee941f116d806c4ac6db0115b9599",
      "name": "Melchor Domingo",
      "email": "melchor_domingo_11372@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Brooklyn",
      "address": "11412 BEACH CHANNEL DR",
      "zip": "11372"
    },
    {
      "id": "bf024293e2ac0ec5bca2128d643615a5",
      "name": "Juan Estevez",
      "email": "juan_estevez_11210@gmail.com",
      "specilization": "gynecologist",
      "borough": "Bronx",
      "address": "2091 Nostrant Avenue",
      "zip": "11210"
    },
    {
      "id": "940b0b6ef940c9d73618619f414483a9",
      "name": "David Fagan",
      "email": "david_fagan_11218@gmail.com",
      "specilization": "dermatologist",
      "borough": "Brooklyn",
      "address": "3000 Fulton Street",
      "zip": "11218"
    },
    {
      "id": "072df0f37b365f4c8326a2d086eae626",
      "name": "Editha Figurasin",
      "email": "editha_figurasin_11422@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "42-07 30th Avenue",
      "zip": "11422"
    },
    {
      "id": "a3fdd370e37a8fabdf8e8d40ea1cf718",
      "name": "Zia Ghavami",
      "email": "zia_ghavami_10468@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "\"2385 Arthur Avenue, Suite @206\"",
      "zip": "10468"
    },
    {
      "id": "08a655ced35ca8e9dbf390cccd1fc022",
      "name": "Karen Greer",
      "email": "karen_greer_11211@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Queens",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "40ab5aa9e3255bc092c9e8c68544770b",
      "name": "Giancarlo Guido",
      "email": "giancarlo_guido_11419@gmail.com",
      "specilization": "toxicologists",
      "borough": "Manhattan",
      "address": "114-06 Queens Blvd",
      "zip": "11419"
    },
    {
      "id": "4b7876e47055e02389147a7ec65dc223",
      "name": "Anil Gupta",
      "email": "anil_gupta_11355@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "41-60 Main Street",
      "zip": "11355"
    },
    {
      "id": "227bd753b1a5558b45bdff690af23ed9",
      "name": "Arthur Hall",
      "email": "arthur_hall_11211@gmail.com",
      "specilization": "urologist",
      "borough": "Flushing",
      "address": "856 Dekalb Avenue",
      "zip": "11211"
    },
    {
      "id": "33fa8621fed97beb6f13c46ff90647ef",
      "name": "Nina Huberman",
      "email": "nina_huberman_10462@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Flushing",
      "address": "3765 Riverdale Avenue - Suite 7",
      "zip": "10462"
    },
    {
      "id": "3154da3d0650d02cab9d2a462fddd603",
      "name": "Julie Hurtado",
      "email": "julie_hurtado_11211@gmail.com",
      "specilization": "allergologists",
      "borough": "Manhattan",
      "address": "3904 16th Avenue",
      "zip": "11211"
    },
    {
      "id": "947274214f4474924603924e69b0de4f",
      "name": "Marcial Jimenez",
      "email": "marcial_jimenez_10033@gmail.com",
      "specilization": "nephrologist",
      "borough": "Cedarhurst",
      "address": "441 west end ave 1 j",
      "zip": "10033"
    },
    {
      "id": "54687ab387fe80fcbf2541579ac6a637",
      "name": "Prakash Kancherla",
      "email": "prakash_kancherla_11204@gmail.com",
      "specilization": "dermatologist",
      "borough": "Bronx",
      "address": "391 Eastern Parkway",
      "zip": "11204"
    },
    {
      "id": "df9979d6dad66317e99d4cb2529f1a5c",
      "name": "Carmen Lazala",
      "email": "carmen_lazala_10034@gmail.com",
      "specilization": "allergologists",
      "borough": "Queens",
      "address": "\"47 E 77th Street, Suite 201\"",
      "zip": "10034"
    },
    {
      "id": "d21711019bdaf230f9e41fad54ffb2e8",
      "name": "Michel Lesly",
      "email": "michel_lesly_10453@gmail.com",
      "specilization": "infectiologist",
      "borough": "New York",
      "address": "139-16 91st Avenue",
      "zip": "10453"
    },
    {
      "id": "17ae2f5916911d1df0966834d97d7c07",
      "name": "Melaine McLean",
      "email": "melaine_mclean_10017@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "\"106 Fort Washington Ave, Suite 1B\"",
      "zip": "10017"
    },
    {
      "id": "3a1d981225bf74e451732815df2833a9",
      "name": "SREENIVASA MURTHY",
      "email": "sreenivasa_murthy_10457@gmail.com",
      "specilization": "pediatrician",
      "borough": "Cedarhurst",
      "address": "1250 Shakespeare Avenue",
      "zip": "10457"
    },
    {
      "id": "95fc0f5c9606d0193f32d4d50616b9de",
      "name": "Denise Nunez",
      "email": "denise_nunez_10016@gmail.com",
      "specilization": "allergologists",
      "borough": "New York",
      "address": "222 East 19th Street",
      "zip": "10016"
    },
    {
      "id": "20d783b28e139795249663948d145de2",
      "name": "Chidiadi Ododo",
      "email": "chidiadi_ododo_11354@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Brooklyn",
      "address": "112-03 Queens Blvd",
      "zip": "11354"
    },
    {
      "id": "8aaa3205ab4a623a5dd0ba038c027e09",
      "name": "Ana Olivero",
      "email": "ana_olivero_11418@gmail.com",
      "specilization": "general practitioner",
      "borough": "Brooklyn",
      "address": "83-45 Dongan Ave",
      "zip": "11418"
    },
    {
      "id": "342e33f2a6eefa1287626047351b1bcf",
      "name": "Tosan Oruwariye",
      "email": "tosan_oruwariye_11217@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "12102 Hillside Avenue",
      "zip": "11217"
    },
    {
      "id": "8ff640eb6600123a3b7114942c843de7",
      "name": "Philip Owusu-Ansah",
      "email": "philip_owusu-ansah_11235@gmail.com",
      "specilization": "diabetologists",
      "borough": "Staten Island",
      "address": "471 Hart Street",
      "zip": "11235"
    },
    {
      "id": "ed1b7bfab2525d2962f53a38efa5e559",
      "name": "Baldevbhai V. Patel",
      "email": "baldevbhai_v._patel_10032@gmail.com",
      "specilization": "cardiologist",
      "borough": "Brooklyn",
      "address": "1627 Broadway",
      "zip": "10032"
    },
    {
      "id": "4ab54f7aa3031b8302102b443a2e8535",
      "name": "Aleska Pelaez-Acosta",
      "email": "aleska_pelaez-acosta_11213@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Jackson Heights",
      "address": "1153 58 Street",
      "zip": "11213"
    },
    {
      "id": "1064255c384fdf36b8947f802c5c595e",
      "name": "Clotilde Pena",
      "email": "clotilde_pena_11204@gmail.com",
      "specilization": "oncologist",
      "borough": "Jackson Heights",
      "address": "391 Eastern Parkway",
      "zip": "11204"
    },
    {
      "id": "a66ed6b33ec88de8a1f8ce751c7fcac5",
      "name": "Rosemarie Pezzulo",
      "email": "rosemarie_pezzulo_11220@gmail.com",
      "specilization": "pulmonologist",
      "borough": "Bronx",
      "address": "5303 8th ave",
      "zip": "11220"
    },
    {
      "id": "65b7b18158f9b881dd0c8d332b55161c",
      "name": "Wipanee Phupakdi",
      "email": "wipanee_phupakdi_11373@gmail.com",
      "specilization": "pediatrician",
      "borough": "Queens",
      "address": "98-30 67th av",
      "zip": "11373"
    },
    {
      "id": "b41f13cfabc90ce143949c7d75914573",
      "name": "JUAN PILARTE",
      "email": "juan_pilarte_11203@gmail.com",
      "specilization": "dermatologist",
      "borough": "Queens",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "82f143a19675776d3666a9412de3d9d5",
      "name": "Paulu Pina",
      "email": "paulu_pina_11210@gmail.com",
      "specilization": "general practitioner",
      "borough": "Cedarhurst",
      "address": "2515 Avenue M",
      "zip": "11210"
    },
    {
      "id": "d44dc3e999bd039454ce156c2e31a2ed",
      "name": "Aurea Quiroz",
      "email": "aurea_quiroz_10003@gmail.com",
      "specilization": "oncologist",
      "borough": "Bronx",
      "address": "251 E 33RD ST LBBY 1N",
      "zip": "10003"
    },
    {
      "id": "0575a2595557c38384aac912c67c4769",
      "name": "Michelle Ratau",
      "email": "michelle_ratau_10312@gmail.com",
      "specilization": "rheumatologist",
      "borough": "Brooklyn",
      "address": "3589 Hylan Blvd",
      "zip": "10312"
    },
    {
      "id": "c88da29c71fc6c024e95051f0f98c1d8",
      "name": "Rosario Reyes-Rigor",
      "email": "rosario_reyes-rigor_11373@gmail.com",
      "specilization": "allergologists",
      "borough": "Cedarhurst",
      "address": "131-24 Rockaway Blvd",
      "zip": "11373"
    },
    {
      "id": "b4ad909a4eba9f48433ab8f8a207c921",
      "name": "Christine Rodler",
      "email": "christine_rodler_11435@gmail.com",
      "specilization": "infectiologist",
      "borough": "Bronx",
      "address": "4207 30th Avenue",
      "zip": "11435"
    },
    {
      "id": "047992de83d7cf4b470bd9d283f70271",
      "name": "Alan Ross",
      "email": "alan_ross_11372@gmail.com",
      "specilization": "urologist",
      "borough": "Bronx",
      "address": "142-20 Franklin Ave",
      "zip": "11372"
    },
    {
      "id": "b01cbef901535fbacb962a9053878838",
      "name": "G Sahni",
      "email": "g_sahni_11211@gmail.com",
      "specilization": "nephrologist",
      "borough": "Jackson Heights",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "03761a286e1fc0605939f3504b58653a",
      "name": "Vinay Shah",
      "email": "vinay_shah_11211@gmail.com",
      "specilization": "psychologist",
      "borough": "Bronx",
      "address": "445 Park Avenue",
      "zip": "11211"
    },
    {
      "id": "a880d2f37e51bb0869550e41d8e4274c",
      "name": "Chavannes Thomas",
      "email": "chavannes_thomas_11691@gmail.com",
      "specilization": "oncologist",
      "borough": "Queens",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
    {
      "id": "8c42ddf41c865348fc5d5cfcafbca195",
      "name": "Romina Tollerutti",
      "email": "romina_tollerutti_10306@gmail.com",
      "specilization": "pediatrician",
      "borough": "Staten Island",
      "address": "\"1870 Richmond Road,\"",
      "zip": "10306"
    },
    {
      "id": "25c14c0c9f4a608c0dfef2e2c11fc6a5",
      "name": "Hector Valencia",
      "email": "hector_valencia_10024@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Flushing",
      "address": "4250 Broadway Suite 1A",
      "zip": "10024"
    },
    {
      "id": "95355705e30588a771f9ebaf2b68d26f",
      "name": "Yves Verna",
      "email": "yves_verna_11203@gmail.com",
      "specilization": "nephrologist",
      "borough": "Flushing",
      "address": "739 Knickerbocker Avenue",
      "zip": "11203"
    },
    {
      "id": "0f94934121fbe945e12a4e549c233b24",
      "name": "Richt Ligsay",
      "email": "richt_ligsay_10021@gmail.com",
      "specilization": "surgeon",
      "borough": "New York",
      "address": "15 Wadsworth Ave.",
      "zip": "10021"
    },
    {
      "id": "423eaab423ea39dd50fd85733b2c8de5",
      "name": "Mohsani Hossain",
      "email": "mohsani_hossain_11355@gmail.com",
      "specilization": "gastroenterologist",
      "borough": "Jackson Heights",
      "address": "87-46 168th Street",
      "zip": "11355"
    },
    {
      "id": "2509fac71cfff8ae640e047b98743d68",
      "name": "Zhang Jian",
      "email": "zhang_jian_11201@gmail.com",
      "specilization": "surgeon",
      "borough": "Staten Island",
      "address": "2503 Church Ave",
      "zip": "11201"
    },
    {
      "id": "f14ff858ea8cb3a6b45a7be85dd407b1",
      "name": "Richard Steiner",
      "email": "richard_steiner_11379@gmail.com",
      "specilization": "endocrinologist",
      "borough": "Queens",
      "address": "59-17 Junction Blvd",
      "zip": "11379"
    },
    {
      "id": "f362e2b75e2e5ac8ca6d47e2b17ba3a3",
      "name": "Francis Hayden",
      "email": "francis_hayden_11205@gmail.com",
      "specilization": "hematologist",
      "borough": "Staten Island",
      "address": "-",
      "zip": "11205"
    },
    {
      "id": "ef07b5ccb98a7be2c630f23da0713440",
      "name": "Pramila Kolisetty",
      "email": "pramila_kolisetty_11355@gmail.com",
      "specilization": "toxicologists",
      "borough": "Queens",
      "address": "314 West 14th Street",
      "zip": "11355"
    },
    {
      "id": "0b145fbc306e72d2fc9d80d3c196b71e",
      "name": "David Weiss",
      "email": "david_weiss_11372@gmail.com",
      "specilization": "ophthalmologist",
      "borough": "Manhattan",
      "address": "629 West 185th Street",
      "zip": "11372"
    },
    {
      "id": "8948f75f1b18700df8651570c383e6f8",
      "name": "Raphael Novogrodski",
      "email": "raphael_novogrodski_11691@gmail.com",
      "specilization": "hematologist",
      "borough": "Jackson Heights",
      "address": "25-52 STEINWAY STREET",
      "zip": "11691"
    },
  ]

export {doctors}