/*/!\ Project not done yet. To finish create web server to acces file system and use fs.writefile()
https://docs.microfocus.com/SM/9.51/Hybrid/Content/programming/javascript/reference/javascript_global_method_writefile.htm /!\ */

var array2D = [ [ "names",  "role",      "city",   "wage", "old_role"],
                [ "Paul",  "sale",      "Lyon",    34000, "assistant"], 
                [ "Marie", "manager",   "Lyon",    37000, "assistant"],   
                [ "Paul",  "assistant", "Paris",   24000, "assistant"]];


function main()
{
    const TempStoreString = Transform2DarrayToString(array2D);
    encodeToBinary(TempStoreString);
} 

function    Transform2DarrayToString(array2D)
{
    var     idxRow;
    var     idxColumn;
    var     rowLength;
    var     columnLength;
    var     string;

    idxRow = 0;
    idxColumn = 0;
    rowLength = array2D.length;
    columnLength = array2D[0].length;
    string = ''; //Initate var to be char type.
    
    //console.log("I am array2D: ", array2D);
    //console.log("rowLength : ", rowLength);
    //console.log("columnLength: ", columnLength);
    while(idxRow < rowLength)
    {
        idxColumn = 0;
                while(idxColumn < columnLength) // -1 to exclude last column from adding coma
                {
                    if(idxColumn === columnLength-1) // if last column of the row which we are reading
                    {
                        string += array2D[idxRow][idxColumn];
                        string += '\n';
                    }
                    else
                    {
                        array2D[idxRow][idxColumn] += ',';
                        string += array2D[idxRow][idxColumn];
                    }
                    idxColumn++;
                }
        idxRow++;
    }
    return(string);
}

function encodeToBinary(string)
{
    var     intInUnicode;
    var     hexadecimalString;
    var     index;
    var     stringLength;

    hexadecimalString = '';
    index = 0;
    stringLength = string.length;
    
    while(index < stringLength)
    {
        intInUnicode = string.charCodeAt(index); // transform char into int 
        hexadecimalString += `${intInUnicode.toString(16).padStart(2, '0')}`; // transform char into hexadecimal with toString(16)
        index++;
    }
    console.log(string);
    console.log(hexadecimalString);
    return(hexadecimalString);
}

main();