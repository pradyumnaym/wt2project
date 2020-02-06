<?php

$op=$_REQUEST["op"];
$code=$_REQUEST["code"];
$conn=mysqli_connect("localhost","pradyumnaym","vRQMdEOtvxI834jz","games");
if($op=="set"){
    $pieces=$_REQUEST["pieces"];
    /*$f=fopen("Games/".$code.".txt",'w');
    fwrite($f,$pieces);
    echo "done";
    fclose($f);*/
    $query="INSERT INTO chess (code,pieces) VALUES('$code','$pieces') ON DUPLICATE KEY UPDATE pieces='$pieces'";
    if(!mysqli_query($conn,$query)){
        $f=fopen("err.txt","w");
        fwrite($f,"abc".mysqli_error($conn));
        fclose($f);
    }
}
else if($op=="get"){
    //$f=fopen("Games/".$code.".txt",'r') or die("not found");
    //echo fread($f,filesize("Games/".$code.".txt"));
    //fclose($f);
    echo mysqli_fetch_assoc(mysqli_query($conn,"SELECT * from chess WHERE code='$code'"))["pieces"];
}
mysqli_close($conn);
?>