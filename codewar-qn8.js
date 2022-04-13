//   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// P: string with letters 'G', 'C', 'A' and 'T'
// R: returns RNA String ie chnages T to U 
// E:  "GCAT"  =>  "GCAU"
// P:  

function DNAtoRNA(dna) {   
    //g is for global and i is for case insensitive 
      return dna.replace(/T/gi, 'U');  //  one of the solutions is return dna.split("T").join("U"); 
    }                             //    this will change, for example, "GCAT" into ["GCA",""]. The join then adds a "U" between all of the strings in the array so you get "GCA" + "U" + "" -> "GCAU". but this is slower than replace i think
            
    console.log(DNAtoRNA('GACTAt'));