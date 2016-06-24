<?php
	//echo "testando ...";
	$result = file_get_contents("http://controles.eprom.com.br/datasnapteste/datasnap/rest/TServerMethods1/GetFiliaisZlib");
	$obj = json_decode($result);
	$txt = zlib_decode(base64_decode($obj->{'result'}[0]));
	//echo "<br /><br /><br />";
	$obj2 = json_decode($txt);
	//var_dump($obj2);
	//echo $obj2->{"FILIAIS"};
	//tentando voltar a imagem
	$imghex=$obj2->{"FILIAIS"}[0]->{"LOGOFIL"};
	//echo $imghex;
	$arq = zlib_decode(hex2bin($imghex));
	header("Content-type: image/bmp");
	echo $arq;
?>