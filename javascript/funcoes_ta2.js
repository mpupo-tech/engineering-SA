function validacao() {
    var teste_userID = document.querySelector('input[name="UserID"]:checked').value;
    var teste_businesStatus = document.querySelector('input[name="tStatus-programa"]:checked').value;
    var teste_customer = document.getElementById('cCliente').options[document.getElementById('cCliente').selectedIndex].value;
    var teste_TipoMM = document.getElementById('TipoMM').options[document.getElementById('TipoMM').selectedIndex].value;
    var teste_tipoProduto = document.getElementById('cProduto').options[document.getElementById('cProduto').selectedIndex].value;
    var teste_ECMtype = document.querySelector('input[name="tTipo-ecm"]:checked');
    var teste_itemtype = document.querySelector('input[name="tTipo-item"]:checked').id;
    var teste_programStatus = document.querySelector('input[name="tStatus-programa"]:checked').id;
    var teste_NomeProjeto = document.getElementById("cProjeto").value
    
    var val_group01 = document.getElementById("usuario")
    var val_group02 = document.getElementById("businesStatus")
    var val_group03 = document.getElementById("customer_ECMtype")
    var val_group04 = document.getElementById("itemtype")
    var val_group05 = document.getElementById("MCMDescription")

//TESTE PARA VALIDAÇÃO DO PRENCHIMENTO DO FORMULARIO E ATIVAR BOÃO  "COPIAR FLUXO".

    if (teste_itemtype == 'radio_GSCM') {
        document.getElementById("Comprados").className = "Comprados_vis"
        document.getElementById("CompradosTipo").className = "Comprados_vis"
        

}   else {
        document.getElementById("Comprados").className = "Comprados_nvis"
        document.getElementById("CompradosTipo").className = "Comprados_nvis"
        teste_TipoMM = ""
        }

    if (teste_ECMtype.id == "ADMBOM") {
        document.getElementById("div_tipoSubstituido").className = "itemChanged_vis";
    } else {document.getElementById("div_tipoSubstituido").className = "itemChanged_nvis";}

    if (teste_programStatus == "SeriesP") {
        document.getElementById("prazoDias").className = "botao_select"
    } else {document.getElementById("prazoDias").className = "prazo_nvis"}
    

    if (teste_userID != "") {
        val_group01.className = "formulario_ok"
        group01 = 1
    } else { val_group01.className = "formulario_nok"
        group01 = 0}
    
    if (teste_businesStatus != "") {
        val_group02.className = "formulario_ok"
        group02 = 1
    } else { val_group02.className = "formulario_nok"
    group02 = 0}

    if (teste_customer != "" && teste_ECMtype.value != "") {
        val_group03.className = "formulario_ok"
        group03 = 1
    } else { val_group03.className = "formulario_nok"
    group03 = 0}

    if (teste_itemtype != "cTipo-item") {
        val_group04.className = "formulario_ok"
        group04 = 1
    } else { val_group04.className = "formulario_nok"
        group04 = 0}
var teste_grupo = group01 + group02 + group03 + group04

    if (teste_grupo == 4) {
        document.getElementById("copia_fluxo_vis").className = 'botao'
        document.getElementById("resumo_final_div").style.display = "unset"
        document.getElementById("workflow_ref_div").style.display = "unset"
        

    } else {document.getElementById("copia_fluxo_vis").className = 'botao_nvis'
    document.getElementById("resumo_final_div").style.display = "none"
    document.getElementById("workflow_ref_div").style.display = "none"
}



    if (teste_itemtype == "radio_GSCM"){
        if (teste_TipoMM != "" && teste_tipoProduto != "" && teste_NomeProjeto != ""){
        val_group05.className = "formulario_desc_ok"
            group05 = 1
            

    } else {val_group05.className = "formulario_nok"
            group05 = 0
            

    }} else {
        if (teste_tipoProduto != "" && teste_NomeProjeto != "") {
            val_group05.className = "formulario_desc_ok"
            group05 = 1
            

        } else {val_group05.className = "formulario_nok"
            group05 = 0
           
        }
    }


    if (teste_grupo + group05 == 5) {
        document.getElementById("copiar_descricao").className = 'copia_descricao_vis'
        document.getElementById("ResumoDescricao").style.display = "unset"

    } else {document.getElementById("copiar_descricao").className = 'botao_nvis'
    document.getElementById("ResumoDescricao").style.display = "none"
}


}

    
     



//FUNÇÃO COPIAR FLUXO.

function copiarfluxo() {
    var tabela_ta2 = document.getElementById('fluxo_ta2_vis')
    tabela_ta2.className = "resultado_vis";
          
    document.getElementById('inputTest1_ta2').innerHTML = tabela_ta2.innerText
    var textocopia = document.getElementById('inputTest1_ta2')
    textocopia.className = "tarea-visivel"
    textocopia.select()
    document.execCommand('copy')
    textocopia.className = "tarea-nvisivel"
    tabela_ta2.className = "resultado_nvis";

}
function copiarDescricao() {
    //var tabela_ta2 = document.getElementById('fluxo_ta2_vis')
    //tabela_ta2.className = "resultado_vis";
    var TextDescription = document.getElementById('ResumoDescricao')

    document.getElementById('inputDescricaoMCM').innerHTML = TextDescription.innerText
    var textocopia = document.getElementById('inputDescricaoMCM')
    textocopia.className = "tarea-visivel"
    textocopia.select()
    document.execCommand('copy')
    textocopia.className = "tarea-nvisivel"
    //tabela_ta2.className = "resultado_nvis";

}

function ta2_workflow() {
    var administrador = "MARCSANT "
    var userProjetos = document.querySelector('input[name="UserID"]:checked').value;
    var programStatus = document.querySelector('input[name="tStatus-programa"]:checked').value;
    var customerFullName = document.getElementById('cCliente').options[document.getElementById('cCliente').selectedIndex].text;
    var customerName_short = document.getElementById('cCliente').options[document.getElementById('cCliente').selectedIndex].value;
    var changeType_short = document.querySelector('input[name="tTipo-ecm"]:checked').id;
    var prazoSeriesP = Number.parseInt(document.getElementById('prazoDias').options[document.getElementById('prazoDias').selectedIndex].value);
    var itemReplaced = document.querySelector('input[name="tipoSubstituido"]:checked').value;
    var itemType = document.querySelector('input[name="tTipo-item"]:checked').value;
    var itemType_short = document.querySelector('input[name="tTipo-item"]:checked').id;
    var itensComprados = document.getElementById('cComprados').options[document.getElementById('cComprados').selectedIndex].value;
    var importados = document.getElementById('importados');
    var TipoMM = document.getElementById('TipoMM').options[document.getElementById('TipoMM').selectedIndex];



 //Prazos
    var userID_Cost01_Prazo = 4
    var Projetos01_Prazo = 4
    var Compras01_Prazo = 5
    var PCP01_Prazo = 5
    var Vendas01_Prazo = 4
    var Fiscal01_Prazo = 4
    var InspQual01_Prazo = 5
    var PPAP01_Prazo = 5
    var ProcessosSAP01_Prazo = 14
    var Compras02_Prazo = 30
    var userID_Cost02_Prazo = 5
    var PPAP0230_Prazo = 30
    var ProcessosSAP0230_Prazo = 30
    var Qualidade0230_Prazo = 30
    var Produto0230_Prazo = 30
    var PPAP0290_Prazo = 90
    var ProcessosSAP0290_Prazo = 90
    var Qualidade0290_Prazo = 90
    var Produto0290_Prazo = 90
    var PPAP02180_Prazo = 180
    var ProcessosSAP02180_Prazo = 180
    var Qualidade02180_Prazo = 180
    var Produto02180_Prazo = 180
    var PtCortePcp02 = 10
    var Projetos02_Prazo = 5









//RESPONSAVEIS FIXOS
    var userID_Cost = "CARDOA96"
    var userID_Fiscal = "WENDDASI"
    var userID_PPAP = "MAERLEON"
    var userID_InspQual = "JOSEGASP"
    var userID_PCPimportados = "GIULSILV"

    //ID OPR COMPRADOS

    if (itensComprados == "GSCM_001") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_002") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_003") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_004") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_005") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_006") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_007") { PCPCompradosID = "ERIKBARB"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_008") { PCPCompradosID = "ERIKBARB"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_009") { PCPCompradosID = "ERIKBARB"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_010") { PCPCompradosID = "GIULSILV"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_011") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_012") { PCPCompradosID = "SEBAREZE"; ComprasID = "SIDNSILV"} else {
    if (itensComprados == "GSCM_013") { PCPCompradosID = "SEBAREZE"; ComprasID = "SIDNSILV"} else {
    if (itensComprados == "GSCM_014") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_015") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_016") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_017") { PCPCompradosID = "SEBAREZE"; ComprasID = "LOPESF82"} else {
    if (itensComprados == "GSCM_018") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_019") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_020") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_021") { PCPCompradosID = "SEBAREZE"; ComprasID = "REISL099"} else {
    if (itensComprados == "GSCM_022") { PCPCompradosID = "SEBAREZE"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_023") { PCPCompradosID = "GIULSILV"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_024") { PCPCompradosID = "GIULSILV"; ComprasID = "PALORIB1"} else {
    if (itensComprados == "GSCM_025") { PCPCompradosID = "GIULSILV"; ComprasID = "PALORIB1"} else {
        PCPCompradosID = administrador;
        ComprasID = administrador;
        }}}}}}}}}}}}}}}}}}}}}}}}}
        
        

    
    //IDS POR CLIENTES
    // WELLDESO
    // ANDRROSA
    // ROMUMART
    // LIBERF72

  
    if (customerName_short == "VWL") { ProdutoID = 'JEANFRA1'; VendasID = 'CLEYALVE'; ProcessosID = 'EDMALIMA'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "GMB") { ProdutoID = 'SALAPEDA'; VendasID = 'GRASDASI'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "PSA") { ProdutoID = 'JEANFRA1'; VendasID = 'CLEYALVE'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "VWC") { ProdutoID = 'DENICARD'; VendasID = 'GRASDASI'; ProcessosID = 'ANDRROSA'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "SCN") { ProdutoID = 'SALAPEDA'; VendasID = 'GRASDASI'; ProcessosID = 'LUCACALE'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "DA6") { ProdutoID = 'SALAPEDA'; VendasID = 'GRASDASI'; ProcessosID = 'WELLDESO'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "DA5") { ProdutoID = 'SALAPEDA'; VendasID = 'GRASDASI'; ProcessosID = 'FLAVCATA'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "FCA") { ProdutoID = 'JEANFRA1'; VendasID = 'CLEYALVE'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "CNH") { ProdutoID = 'DENICARD'; VendasID = 'CLEYALVE'; ProcessosID = 'EDMALIMA'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "KIA") { ProdutoID = 'SALAPEDA'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "MWM") { ProdutoID = 'DENICARD'; VendasID = 'CARLMART'; ProcessosID = 'LUCACALE'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "HYU") { ProdutoID = 'SALAPEDA'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "CHE") { ProdutoID = 'SALAPEDA'; VendasID = 'GRASDASI'; ProcessosID = 'ROMUMART'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "HPE") { ProdutoID = 'JEANFRA1'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "CAO") { ProdutoID = 'SALAPEDA'; VendasID = 'CLEYALVE'; ProcessosID = 'ROMUMART'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "REN") { ProdutoID = 'JEANFRA1'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "VOL") { ProdutoID = 'DENICARD'; VendasID = 'GRASDASI'; ProcessosID = 'ANDRROSA'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "NIS") { ProdutoID = 'JEANFRA1'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'JULILOPE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "IVE") { ProdutoID = 'DENICARD'; VendasID = 'CLEYALVE'; ProcessosID = 'EDMALIMA'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'ELTOBORG'} else {
    if (customerName_short == "ARG") { ProdutoID = 'JEANFRA1'; VendasID = 'CARLMART'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
    if (customerName_short == "TEN") { ProdutoID = 'JEANFRA1'; VendasID = 'CLEYALVE'; ProcessosID = 'ROMUMART'; QualidadeID = 'DIOGBOVE'; PCPFabricadosID = 'CIRINA14'} else {
            ProdutoID = administrador;
        VendasID = administrador;
        ProcessosID = administrador;
        QualidadeID = administrador;
        PCPFabricadosID = administrador
        }}}}}}}}}}}}}}}}}}}}}



      


//FORMULARIO


/*if (userProjetos != "") {
    ProjetosID = userProjetos
} else {ProjetosID = administrador}*/

if (userProjetos == "DOSSAG30") 
    {ProjetosID001 = "MARCSANT"
    ProjetosID002 = userProjetos
} 
    else if (userProjetos != "") {
    ProjetosID001 = userProjetos
    ProjetosID002 = userProjetos
} //else {ProjetosID = administrador}

 

if (importados.checked) {
    PCPCompradosID = userID_PCPimportados
} else {PCPCompradosID = PCPCompradosID}



if (itemType_short == 'radio_GSCM') {
    PCP_ID = PCPCompradosID; PCP01_Prazo = 5;
    ProcessosSAPID = administrador; ProcessosSAP01_Prazo = 0;
    ComprasID = ComprasID; Compras01_Prazo = 5; Compras02_Prazo = 30; 
    VendasID = administrador; Vendas01_Prazo = 0;
    userID_PPAP = userID_PPAP; PPAP01_Prazo = 5;
    userID_InspQual = userID_InspQual; InspQual01_Prazo = 5;


} else { if (itemType_short == 'radio_FG') {
    PCP_ID = PCPFabricadosID; PCP01_Prazo = 5;
    ProcessosSAPID = ProcessosID; ProcessosSAP01_Prazo = 14;
    ComprasID = administrador; Compras01_Prazo = 0; Compras02_Prazo = 0; 
    VendasID = VendasID; Vendas01_Prazo = 4;
    userID_PPAP = administrador; PPAP01_Prazo = 0; PPAP02_Prazo = 0;
    userID_InspQual = administrador; InspQual01_Prazo = 0;


} else { if (itemType_short == 'radio_SA') {
    PCP_ID = PCPFabricadosID; PCP01_Prazo = 5;
    ProcessosSAPID = administrador; ProcessosSAP01_Prazo = 0;
    ComprasID = administrador; Compras01_Prazo = 0; Compras02_Prazo = 0; 
    VendasID = administrador; Vendas01_Prazo = 0;
    userID_PPAP = administrador; PPAP01_Prazo = 0; PPAP02_Prazo = 0;
    userID_InspQual = administrador; InspQual01_Prazo = 0;
    }}}


    
if (programStatus == "TENPLus" || programStatus == "") {
prazoSeriesP = 180
}

if (changeType_short == "ADMBOM") {
    var PtCortePcpID = itemReplaced
    PtCortePcp02 = PtCortePcp02
   
} else {
    var PtCortePcpID = administrador
    PtCortePcp02 = 0
}


//VERIFICAR PARA DIMINUIR A QUANTIDADE DE LINHAS.

if (prazoSeriesP == "30") {
    userID_PPAP30 = userID_PPAP
    PPAP0230_Prazo = 30
    ProcessosID30 = ProcessosID
    ProcessosSAP0230_Prazo = 30
    QualidadeID30 = QualidadeID
    Qualidade0230_Prazo = 30
    ProdutoID30 = ProdutoID
    Produto0230_Prazo = 30
} else {
    userID_PPAP30 = administrador
    PPAP0230_Prazo = 0
    ProcessosID30 = administrador
    ProcessosSAP0230_Prazo = 0
    QualidadeID30 = administrador
    Qualidade0230_Prazo = 0
    ProdutoID30 = administrador
    Produto0230_Prazo = 0
    }

    if (prazoSeriesP == "90") {
    userID_PPAP90 = userID_PPAP
    PPAP0290_Prazo = 90
    ProcessosID90 = ProcessosID
    ProcessosSAP0290_Prazo = 90
    QualidadeID90 = QualidadeID
    Qualidade0290_Prazo = 90
    ProdutoID90 = ProdutoID
    Produto0290_Prazo = 90
} else {
    userID_PPAP90 = administrador
    PPAP0290_Prazo = 0
    ProcessosID90 = administrador
    ProcessosSAP0290_Prazo = 0
    QualidadeID90 = administrador
    Qualidade0290_Prazo = 0
    ProdutoID90 = administrador
    Produto0290_Prazo = 0
    }

    if (prazoSeriesP == "180") {
    userID_PPAP180 = userID_PPAP
    PPAP02180_Prazo = 180
    ProcessosID180 = ProcessosID
    ProcessosSAP02180_Prazo = 180
    QualidadeID180 = QualidadeID
    Qualidade02180_Prazo = 180
    ProdutoID180 = ProdutoID
    Produto02180_Prazo = 180
} else {
    userID_PPAP180 = administrador
    PPAP02180_Prazo = 0
    ProcessosID180 = administrador
    ProcessosSAP02180_Prazo = 0
    QualidadeID180 = administrador
    Qualidade02180_Prazo = 0
    ProdutoID180 = administrador
    Produto02180_Prazo = 0
    }

    if (userID_PPAP == administrador) {
        PPAP0230_Prazo = 0
        PPAP0290_Prazo = 0
        PPAP02180_Prazo = 0
        }
    if (ProcessosID == administrador) {
        ProcessosSAP0230_Prazo = 0
        ProcessosSAP0290_Prazo = 0
        ProcessosSAP02180_Prazo = 0

    }


document.getElementById("nomeID01").innerHTML = userID_Cost;
document.getElementById("nomeID02").innerHTML = ProjetosID001;
document.getElementById("nomeID03").innerHTML = ComprasID;
document.getElementById("nomeID04").innerHTML = PCP_ID;
document.getElementById("nomeID05").innerHTML = VendasID;
document.getElementById("nomeID06").innerHTML = userID_Fiscal;
document.getElementById("nomeID07").innerHTML = userID_InspQual;
document.getElementById("nomeID08").innerHTML = userID_PPAP;
document.getElementById("nomeID09").innerHTML = ProcessosSAPID;
document.getElementById("nomeID10").innerHTML = ComprasID;
document.getElementById("nomeID11").innerHTML = userID_Cost;

document.getElementById("nomeID12").innerHTML = userID_PPAP30;
document.getElementById("nomeID13").innerHTML = ProcessosID30;
document.getElementById("nomeID14").innerHTML = QualidadeID30;
document.getElementById("nomeID15").innerHTML = ProdutoID30;

document.getElementById("nomeID16").innerHTML = userID_PPAP90;
document.getElementById("nomeID17").innerHTML = ProcessosID90;
document.getElementById("nomeID18").innerHTML = QualidadeID90;
document.getElementById("nomeID19").innerHTML = ProdutoID90;

document.getElementById("nomeID20").innerHTML = userID_PPAP180;
document.getElementById("nomeID21").innerHTML = ProcessosID180;
document.getElementById("nomeID22").innerHTML = QualidadeID180;
document.getElementById("nomeID23").innerHTML = ProdutoID180;

document.getElementById("nomeID24").innerHTML = PtCortePcpID;
document.getElementById("nomeID25").innerHTML = ProjetosID002;

//TABELA TA2
document.getElementById("TA2_nomeID01").innerHTML = userID_Cost;
document.getElementById("TA2_nomeID02").innerHTML = ProjetosID001;
document.getElementById("TA2_nomeID03").innerHTML = ComprasID;
document.getElementById("TA2_nomeID04").innerHTML = PCP_ID;
document.getElementById("TA2_nomeID05").innerHTML = VendasID;
document.getElementById("TA2_nomeID06").innerHTML = userID_Fiscal;
document.getElementById("TA2_nomeID07").innerHTML = userID_InspQual;
document.getElementById("TA2_nomeID08").innerHTML = userID_PPAP;
document.getElementById("TA2_nomeID09").innerHTML = ProcessosSAPID;
document.getElementById("TA2_nomeID10").innerHTML = ComprasID;
document.getElementById("TA2_nomeID11").innerHTML = userID_Cost;
document.getElementById("TA2_nomeID12").innerHTML = userID_PPAP30;
document.getElementById("TA2_nomeID13").innerHTML = ProcessosID30;
document.getElementById("TA2_nomeID14").innerHTML = QualidadeID30;
document.getElementById("TA2_nomeID15").innerHTML = ProdutoID30;
document.getElementById("TA2_nomeID16").innerHTML = userID_PPAP90;
document.getElementById("TA2_nomeID17").innerHTML = ProcessosID90;
document.getElementById("TA2_nomeID18").innerHTML = QualidadeID90;
document.getElementById("TA2_nomeID19").innerHTML = ProdutoID90;
document.getElementById("TA2_nomeID20").innerHTML = userID_PPAP180;
document.getElementById("TA2_nomeID21").innerHTML = ProcessosID180;
document.getElementById("TA2_nomeID22").innerHTML = QualidadeID180;
document.getElementById("TA2_nomeID23").innerHTML = ProdutoID180;
document.getElementById("TA2_nomeID24").innerHTML = PtCortePcpID;
document.getElementById("TA2_nomeID25").innerHTML = ProjetosID002;


//NOME COMPLETO

userID_Cost_nomeFull = document.getElementById(userID_Cost).innerText
ProjetosID001_nomeFull = document.getElementById(ProjetosID001).innerText
ComprasID_nomeFull = document.getElementById(ComprasID).innerText
PCP_ID_nomeFull = document.getElementById(PCP_ID).innerText
VendasID_nomeFull = document.getElementById(VendasID).innerText
userID_Fiscal_nomeFull = document.getElementById(userID_Fiscal).innerText
userID_InspQual_nomeFull = document.getElementById(userID_InspQual).innerText
userID_PPAP_nomeFull = document.getElementById(userID_PPAP).innerText
ProcessosSAPID_nomeFull = document.getElementById(ProcessosSAPID).innerText
userID_PPAP30_nomeFull = document.getElementById(userID_PPAP30).innerText
ProcessosID30_nomeFull = document.getElementById(ProcessosID30).innerText
QualidadeID30_nomeFull = document.getElementById(QualidadeID30).innerText
ProdutoID30_nomeFull = document.getElementById(ProdutoID30).innerText
userID_PPAP90_nomeFull = document.getElementById(userID_PPAP90).innerText
ProcessosID90_nomeFull = document.getElementById(ProcessosID90).innerText
QualidadeID90_nomeFull = document.getElementById(QualidadeID90).innerText
ProdutoID90_nomeFull = document.getElementById(ProdutoID90).innerText
userID_PPAP180_nomeFull = document.getElementById(userID_PPAP180).innerText
ProcessosID180_nomeFull = document.getElementById(ProcessosID180).innerText
QualidadeID180_nomeFull = document.getElementById(QualidadeID180).innerText
ProdutoID180_nomeFull = document.getElementById(ProdutoID180).innerText
PtCortePcpID_nomeFull = document.getElementById(PtCortePcpID).innerText
ProjetosID002_nomeFull = document.getElementById(ProjetosID002).innerText

document.getElementById("nome01").innerHTML = userID_Cost_nomeFull;
document.getElementById("nome02").innerHTML = ProjetosID001_nomeFull;
document.getElementById("nome03").innerHTML = ComprasID_nomeFull;
document.getElementById("nome04").innerHTML = PCP_ID_nomeFull;
document.getElementById("nome05").innerHTML = VendasID_nomeFull;
document.getElementById("nome06").innerHTML = userID_Fiscal_nomeFull;
document.getElementById("nome07").innerHTML = userID_InspQual_nomeFull;
document.getElementById("nome08").innerHTML = userID_PPAP_nomeFull;
document.getElementById("nome09").innerHTML = ProcessosSAPID_nomeFull;
document.getElementById("nome10").innerHTML = ComprasID_nomeFull;
document.getElementById("nome11").innerHTML = userID_Cost_nomeFull;
document.getElementById("nome12").innerHTML = userID_PPAP30_nomeFull;
document.getElementById("nome13").innerHTML = ProcessosID30_nomeFull;
document.getElementById("nome14").innerHTML = QualidadeID30_nomeFull;
document.getElementById("nome15").innerHTML = ProdutoID30_nomeFull;
document.getElementById("nome16").innerHTML = userID_PPAP90_nomeFull;
document.getElementById("nome17").innerHTML = ProcessosID90_nomeFull;
document.getElementById("nome18").innerHTML = QualidadeID90_nomeFull;
document.getElementById("nome19").innerHTML = ProdutoID90_nomeFull;
document.getElementById("nome20").innerHTML = userID_PPAP180_nomeFull;
document.getElementById("nome21").innerHTML = ProcessosID180_nomeFull;
document.getElementById("nome22").innerHTML = QualidadeID180_nomeFull;
document.getElementById("nome23").innerHTML = ProdutoID180_nomeFull;
document.getElementById("nome24").innerHTML = PtCortePcpID_nomeFull;
document.getElementById("nome25").innerHTML = ProjetosID002_nomeFull;
//FIM NOME COMPLETO

// PRAZOS
//01
document.getElementById("task01").innerHTML = userID_Cost01_Prazo;
document.getElementById("task02").innerHTML = Projetos01_Prazo;
//02
document.getElementById("task03").innerHTML = Compras01_Prazo;
document.getElementById("task04").innerHTML = PCP01_Prazo;
document.getElementById("task05").innerHTML = Vendas01_Prazo;
//03
document.getElementById("task06").innerHTML = Fiscal01_Prazo;
//04
document.getElementById("task07").innerHTML = InspQual01_Prazo;
document.getElementById("task08").innerHTML = PPAP01_Prazo;
document.getElementById("task09").innerHTML = ProcessosSAP01_Prazo;
//05
document.getElementById("task10").innerHTML = Compras02_Prazo;
//06
document.getElementById("task11").innerHTML = userID_Cost02_Prazo;
//07
document.getElementById("task12").innerHTML = PPAP0230_Prazo;
document.getElementById("task13").innerHTML = ProcessosSAP0230_Prazo;
document.getElementById("task14").innerHTML = Qualidade0230_Prazo;
document.getElementById("task15").innerHTML = Produto0230_Prazo;
//08
document.getElementById("task16").innerHTML = PPAP0290_Prazo;
document.getElementById("task17").innerHTML = ProcessosSAP0290_Prazo;
document.getElementById("task18").innerHTML = Qualidade0290_Prazo;
document.getElementById("task19").innerHTML = Produto0290_Prazo;
//09
document.getElementById("task20").innerHTML = PPAP02180_Prazo;
document.getElementById("task21").innerHTML = ProcessosSAP02180_Prazo;
document.getElementById("task22").innerHTML = Qualidade02180_Prazo;
document.getElementById("task23").innerHTML = Produto02180_Prazo;
//10
document.getElementById("task24").innerHTML = PtCortePcp02;
//11
document.getElementById("task25").innerHTML = Projetos02_Prazo;

//GRUPOS NIVEIS (CALCULOS)


var date = new Date();
var dateStart = (date.getDate().toString().length == 1 ? '0' + date.getDate().toString() : date.getDate().toString()) + '.' + ((date.getMonth() + 1).toString().length == 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + '.' + date.getFullYear();

//GRUPO 01
nivel01 = Math.max(userID_Cost01_Prazo)
var date_nivel01 = new Date(date);
date_nivel01.setDate(date.getDate()+nivel01);
date_nivel01_full = (date_nivel01.getDate().toString().length == 1 ? '0' + date_nivel01.getDate().toString() : date_nivel01.getDate().toString()) + '.' + ((date_nivel01.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel01.getMonth() + 1).toString() : (date_nivel01.getMonth() + 1).toString()) + '.' + date_nivel01.getFullYear()



nivel02 = Math.max(Compras01_Prazo,PCP01_Prazo,Vendas01_Prazo,Projetos01_Prazo)
var date_nivel02 = new Date(date_nivel01);
date_nivel02.setDate(date_nivel01.getDate()+nivel02);
date_nivel02_full = (date_nivel02.getDate().toString().length == 1 ? '0' + date_nivel02.getDate().toString() : date_nivel02.getDate().toString()) + '.' + ((date_nivel02.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel02.getMonth() + 1).toString() : (date_nivel02.getMonth() + 1).toString()) + '.' + date_nivel02.getFullYear()

nivel03 = Math.max(Fiscal01_Prazo)
var date_nivel03 = new Date(date_nivel02);
date_nivel03.setDate(date_nivel02.getDate()+nivel03);
date_nivel03_full = (date_nivel03.getDate().toString().length == 1 ? '0' + date_nivel03.getDate().toString() : date_nivel03.getDate().toString()) + '.' + ((date_nivel03.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel03.getMonth() + 1).toString() : (date_nivel03.getMonth() + 1).toString()) + '.' + date_nivel03.getFullYear()


nivel04 = Math.max(InspQual01_Prazo,PPAP01_Prazo,ProcessosSAP01_Prazo)
var date_nivel04 = new Date(date_nivel03);
date_nivel04.setDate(date_nivel03.getDate()+nivel04);
date_nivel04_full = (date_nivel04.getDate().toString().length == 1 ? '0' + date_nivel04.getDate().toString() : date_nivel04.getDate().toString()) + '.' + ((date_nivel04.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel04.getMonth() + 1).toString() : (date_nivel04.getMonth() + 1).toString()) + '.' + date_nivel04.getFullYear()

nivel05 = Math.max(Compras02_Prazo)
var date_nivel05 = new Date(date_nivel04);
date_nivel05.setDate(date_nivel04.getDate()+nivel05);
date_nivel05_full = (date_nivel05.getDate().toString().length == 1 ? '0' + date_nivel05.getDate().toString() : date_nivel05.getDate().toString()) + '.' + ((date_nivel05.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel05.getMonth() + 1).toString() : (date_nivel05.getMonth() + 1).toString()) + '.' + date_nivel05.getFullYear()


nivel06 = Math.max(userID_Cost02_Prazo)
var date_nivel06 = new Date(date_nivel05);
date_nivel06.setDate(date_nivel05.getDate()+nivel06);
date_nivel06_full = (date_nivel06.getDate().toString().length == 1 ? '0' + date_nivel06.getDate().toString() : date_nivel06.getDate().toString()) + '.' + ((date_nivel06.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel06.getMonth() + 1).toString() : (date_nivel06.getMonth() + 1).toString()) + '.' + date_nivel06.getFullYear()


nivel07 = Math.max(PPAP0230_Prazo,ProcessosSAP0230_Prazo,Qualidade0230_Prazo,Produto0230_Prazo)
var date_nivel07 = new Date(date_nivel06);
date_nivel07.setDate(date_nivel06.getDate()+nivel07);
date_nivel07_full = (date_nivel07.getDate().toString().length == 1 ? '0' + date_nivel07.getDate().toString() : date_nivel07.getDate().toString()) + '.' + ((date_nivel07.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel07.getMonth() + 1).toString() : (date_nivel07.getMonth() + 1).toString()) + '.' + date_nivel07.getFullYear()


nivel08 = Math.max(PPAP0290_Prazo,ProcessosSAP0290_Prazo,Qualidade0290_Prazo,Produto0290_Prazo)
var date_nivel08 = new Date(date_nivel07);
date_nivel08.setDate(date_nivel07.getDate()+nivel08);
date_nivel08_full = (date_nivel08.getDate().toString().length == 1 ? '0' + date_nivel08.getDate().toString() : date_nivel08.getDate().toString()) + '.' + ((date_nivel08.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel08.getMonth() + 1).toString() : (date_nivel08.getMonth() + 1).toString()) + '.' + date_nivel08.getFullYear()

nivel09 = Math.max(PPAP02180_Prazo,ProcessosSAP02180_Prazo,Qualidade02180_Prazo,Produto02180_Prazo)
var date_nivel09 = new Date(date_nivel08);
date_nivel09.setDate(date_nivel08.getDate()+nivel09);
date_nivel09_full = (date_nivel09.getDate().toString().length == 1 ? '0' + date_nivel09.getDate().toString() : date_nivel09.getDate().toString()) + '.' + ((date_nivel09.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel09.getMonth() + 1).toString() : (date_nivel09.getMonth() + 1).toString()) + '.' + date_nivel09.getFullYear()


nivel10 = Math.max(PtCortePcp02)
var date_nivel10 = new Date(date_nivel09);
date_nivel10.setDate(date_nivel09.getDate()+nivel10);
date_nivel10_full = (date_nivel10.getDate().toString().length == 1 ? '0' + date_nivel10.getDate().toString() : date_nivel10.getDate().toString()) + '.' + ((date_nivel10.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel10.getMonth() + 1).toString() : (date_nivel10.getMonth() + 1).toString()) + '.' + date_nivel10.getFullYear()


nivel11 = Math.max(Projetos02_Prazo)
var date_nivel11 = new Date(date_nivel10);
date_nivel11.setDate(date_nivel10.getDate()+nivel11);
date_nivel11_full = (date_nivel11.getDate().toString().length == 1 ? '0' + date_nivel11.getDate().toString() : date_nivel11.getDate().toString()) + '.' + ((date_nivel11.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel11.getMonth() + 1).toString() : (date_nivel11.getMonth() + 1).toString()) + '.' + date_nivel11.getFullYear()

var periodototal = nivel01 + nivel02 + nivel03 + nivel04 + nivel05 + nivel06 + nivel07 + nivel08 + nivel09 + nivel10 + nivel11

//START DATE


var date_nivel01_due = new Date(date)
date_nivel01_due.setDate(date.getDate()+userID_Cost01_Prazo)
date_nivel01_due_std = (date_nivel01_due.getDate().toString().length == 1 ? '0' + date_nivel01_due.getDate().toString() : date_nivel01_due.getDate().toString()) + '.' + ((date_nivel01_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel01_due.getMonth() + 1).toString() : (date_nivel01_due.getMonth() + 1).toString()) + '.' + date_nivel01_due.getFullYear()

var date_nivel02_due = new Date(date_nivel01)
date_nivel02_due.setDate(date_nivel01.getDate()+Projetos01_Prazo)
date_nivel02_due_std = (date_nivel02_due.getDate().toString().length == 1 ? '0' + date_nivel02_due.getDate().toString() : date_nivel02_due.getDate().toString()) + '.' + ((date_nivel02_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel02_due.getMonth() + 1).toString() : (date_nivel02_due.getMonth() + 1).toString()) + '.' + date_nivel02_due.getFullYear()

var date_nivel03_due = new Date(date_nivel01)
date_nivel03_due.setDate(date_nivel01.getDate()+Compras01_Prazo)
date_nivel03_due_std = (date_nivel03_due.getDate().toString().length == 1 ? '0' + date_nivel03_due.getDate().toString() : date_nivel03_due.getDate().toString()) + '.' + ((date_nivel03_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel03_due.getMonth() + 1).toString() : (date_nivel03_due.getMonth() + 1).toString()) + '.' + date_nivel03_due.getFullYear()

var date_nivel04_due = new Date(date_nivel01)
date_nivel04_due.setDate(date_nivel01.getDate()+PCP01_Prazo)
date_nivel04_due_std = (date_nivel04_due.getDate().toString().length == 1 ? '0' + date_nivel04_due.getDate().toString() : date_nivel04_due.getDate().toString()) + '.' + ((date_nivel04_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel04_due.getMonth() + 1).toString() : (date_nivel04_due.getMonth() + 1).toString()) + '.' + date_nivel04_due.getFullYear()

var date_nivel05_due = new Date(date_nivel01)
date_nivel05_due.setDate(date_nivel01.getDate()+Vendas01_Prazo)
date_nivel05_due_std = (date_nivel05_due.getDate().toString().length == 1 ? '0' + date_nivel05_due.getDate().toString() : date_nivel05_due.getDate().toString()) + '.' + ((date_nivel05_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel05_due.getMonth() + 1).toString() : (date_nivel05_due.getMonth() + 1).toString()) + '.' + date_nivel05_due.getFullYear()

var date_nivel06_due = new Date(date_nivel02)
date_nivel06_due.setDate(date_nivel02.getDate()+Fiscal01_Prazo)
date_nivel06_due_std = (date_nivel06_due.getDate().toString().length == 1 ? '0' + date_nivel06_due.getDate().toString() : date_nivel06_due.getDate().toString()) + '.' + ((date_nivel06_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel06_due.getMonth() + 1).toString() : (date_nivel06_due.getMonth() + 1).toString()) + '.' + date_nivel06_due.getFullYear()

var date_nivel07_due = new Date(date_nivel03)
date_nivel07_due.setDate(date_nivel03.getDate()+InspQual01_Prazo)
date_nivel07_due_std = (date_nivel07_due.getDate().toString().length == 1 ? '0' + date_nivel07_due.getDate().toString() : date_nivel07_due.getDate().toString()) + '.' + ((date_nivel07_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel07_due.getMonth() + 1).toString() : (date_nivel07_due.getMonth() + 1).toString()) + '.' + date_nivel07_due.getFullYear()

var date_nivel08_due = new Date(date_nivel03)
date_nivel08_due.setDate(date_nivel03.getDate()+PPAP01_Prazo)
date_nivel08_due_std = (date_nivel08_due.getDate().toString().length == 1 ? '0' + date_nivel08_due.getDate().toString() : date_nivel08_due.getDate().toString()) + '.' + ((date_nivel08_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel08_due.getMonth() + 1).toString() : (date_nivel08_due.getMonth() + 1).toString()) + '.' + date_nivel08_due.getFullYear()

var date_nivel09_due = new Date(date_nivel03)
date_nivel09_due.setDate(date_nivel03.getDate()+ProcessosSAP01_Prazo)
date_nivel09_due_std = (date_nivel09_due.getDate().toString().length == 1 ? '0' + date_nivel09_due.getDate().toString() : date_nivel09_due.getDate().toString()) + '.' + ((date_nivel09_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel09_due.getMonth() + 1).toString() : (date_nivel09_due.getMonth() + 1).toString()) + '.' + date_nivel09_due.getFullYear()

var date_nivel10_due = new Date(date_nivel04)
date_nivel10_due.setDate(date_nivel04.getDate()+Compras02_Prazo)
date_nivel10_due_std = (date_nivel10_due.getDate().toString().length == 1 ? '0' + date_nivel10_due.getDate().toString() : date_nivel10_due.getDate().toString()) + '.' + ((date_nivel10_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel10_due.getMonth() + 1).toString() : (date_nivel10_due.getMonth() + 1).toString()) + '.' + date_nivel10_due.getFullYear()

var date_nivel11_due = new Date(date_nivel05)
date_nivel11_due.setDate(date_nivel05.getDate()+userID_Cost02_Prazo)
date_nivel11_due_std = (date_nivel11_due.getDate().toString().length == 1 ? '0' + date_nivel11_due.getDate().toString() : date_nivel11_due.getDate().toString()) + '.' + ((date_nivel11_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel11_due.getMonth() + 1).toString() : (date_nivel11_due.getMonth() + 1).toString()) + '.' + date_nivel11_due.getFullYear()

var date_nivel12_due = new Date(date_nivel06)
date_nivel12_due.setDate(date_nivel06.getDate()+PPAP0230_Prazo)
date_nivel12_due_std = (date_nivel12_due.getDate().toString().length == 1 ? '0' + date_nivel12_due.getDate().toString() : date_nivel12_due.getDate().toString()) + '.' + ((date_nivel12_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel12_due.getMonth() + 1).toString() : (date_nivel12_due.getMonth() + 1).toString()) + '.' + date_nivel12_due.getFullYear()

var date_nivel13_due = new Date(date_nivel06)
date_nivel13_due.setDate(date_nivel06.getDate()+ProcessosSAP0230_Prazo)
date_nivel13_due_std = (date_nivel13_due.getDate().toString().length == 1 ? '0' + date_nivel13_due.getDate().toString() : date_nivel13_due.getDate().toString()) + '.' + ((date_nivel13_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel13_due.getMonth() + 1).toString() : (date_nivel13_due.getMonth() + 1).toString()) + '.' + date_nivel13_due.getFullYear()

var date_nivel14_due = new Date(date_nivel06)
date_nivel14_due.setDate(date_nivel06.getDate()+Qualidade0230_Prazo)
date_nivel14_due_std = (date_nivel14_due.getDate().toString().length == 1 ? '0' + date_nivel14_due.getDate().toString() : date_nivel14_due.getDate().toString()) + '.' + ((date_nivel14_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel14_due.getMonth() + 1).toString() : (date_nivel14_due.getMonth() + 1).toString()) + '.' + date_nivel14_due.getFullYear()

var date_nivel15_due = new Date(date_nivel06)
date_nivel15_due.setDate(date_nivel06.getDate()+Produto0230_Prazo)
date_nivel15_due_std = (date_nivel15_due.getDate().toString().length == 1 ? '0' + date_nivel15_due.getDate().toString() : date_nivel15_due.getDate().toString()) + '.' + ((date_nivel15_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel15_due.getMonth() + 1).toString() : (date_nivel15_due.getMonth() + 1).toString()) + '.' + date_nivel15_due.getFullYear()

var date_nivel16_due = new Date(date_nivel07)
date_nivel16_due.setDate(date_nivel07.getDate()+PPAP0290_Prazo)
date_nivel16_due_std = (date_nivel16_due.getDate().toString().length == 1 ? '0' + date_nivel16_due.getDate().toString() : date_nivel16_due.getDate().toString()) + '.' + ((date_nivel16_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel16_due.getMonth() + 1).toString() : (date_nivel16_due.getMonth() + 1).toString()) + '.' + date_nivel16_due.getFullYear()

var date_nivel17_due = new Date(date_nivel07)
date_nivel17_due.setDate(date_nivel07.getDate()+ProcessosSAP0290_Prazo)
date_nivel17_due_std = (date_nivel17_due.getDate().toString().length == 1 ? '0' + date_nivel17_due.getDate().toString() : date_nivel17_due.getDate().toString()) + '.' + ((date_nivel17_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel17_due.getMonth() + 1).toString() : (date_nivel17_due.getMonth() + 1).toString()) + '.' + date_nivel17_due.getFullYear()

var date_nivel18_due = new Date(date_nivel07)
date_nivel18_due.setDate(date_nivel07.getDate()+Qualidade0290_Prazo)
date_nivel18_due_std = (date_nivel18_due.getDate().toString().length == 1 ? '0' + date_nivel18_due.getDate().toString() : date_nivel18_due.getDate().toString()) + '.' + ((date_nivel18_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel18_due.getMonth() + 1).toString() : (date_nivel18_due.getMonth() + 1).toString()) + '.' + date_nivel18_due.getFullYear()

var date_nivel19_due = new Date(date_nivel07)
date_nivel19_due.setDate(date_nivel07.getDate()+Produto0290_Prazo)
date_nivel19_due_std = (date_nivel19_due.getDate().toString().length == 1 ? '0' + date_nivel19_due.getDate().toString() : date_nivel19_due.getDate().toString()) + '.' + ((date_nivel19_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel19_due.getMonth() + 1).toString() : (date_nivel19_due.getMonth() + 1).toString()) + '.' + date_nivel19_due.getFullYear()

var date_nivel20_due = new Date(date_nivel08)
date_nivel20_due.setDate(date_nivel08.getDate()+PPAP02180_Prazo)
date_nivel20_due_std = (date_nivel20_due.getDate().toString().length == 1 ? '0' + date_nivel20_due.getDate().toString() : date_nivel20_due.getDate().toString()) + '.' + ((date_nivel20_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel20_due.getMonth() + 1).toString() : (date_nivel20_due.getMonth() + 1).toString()) + '.' + date_nivel20_due.getFullYear()

var date_nivel21_due = new Date(date_nivel08)
date_nivel21_due.setDate(date_nivel08.getDate()+ProcessosSAP02180_Prazo)
date_nivel21_due_std = (date_nivel21_due.getDate().toString().length == 1 ? '0' + date_nivel21_due.getDate().toString() : date_nivel21_due.getDate().toString()) + '.' + ((date_nivel21_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel21_due.getMonth() + 1).toString() : (date_nivel21_due.getMonth() + 1).toString()) + '.' + date_nivel21_due.getFullYear()

var date_nivel22_due = new Date(date_nivel08)
date_nivel22_due.setDate(date_nivel08.getDate()+Qualidade02180_Prazo)
date_nivel22_due_std = (date_nivel22_due.getDate().toString().length == 1 ? '0' + date_nivel22_due.getDate().toString() : date_nivel22_due.getDate().toString()) + '.' + ((date_nivel22_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel22_due.getMonth() + 1).toString() : (date_nivel22_due.getMonth() + 1).toString()) + '.' + date_nivel22_due.getFullYear()

var date_nivel23_due = new Date(date_nivel08)
date_nivel23_due.setDate(date_nivel08.getDate()+Produto02180_Prazo)
date_nivel23_due_std = (date_nivel23_due.getDate().toString().length == 1 ? '0' + date_nivel23_due.getDate().toString() : date_nivel23_due.getDate().toString()) + '.' + ((date_nivel23_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel23_due.getMonth() + 1).toString() : (date_nivel23_due.getMonth() + 1).toString()) + '.' + date_nivel23_due.getFullYear()

var date_nivel24_due = new Date(date_nivel09)
date_nivel24_due.setDate(date_nivel09.getDate()+PtCortePcp02)
date_nivel24_due_std = (date_nivel24_due.getDate().toString().length == 1 ? '0' + date_nivel24_due.getDate().toString() : date_nivel24_due.getDate().toString()) + '.' + ((date_nivel24_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel24_due.getMonth() + 1).toString() : (date_nivel24_due.getMonth() + 1).toString()) + '.' + date_nivel24_due.getFullYear()

var date_nivel25_due = new Date(date_nivel10)
date_nivel25_due.setDate(date_nivel10.getDate()+Projetos02_Prazo)
date_nivel25_due_std = (date_nivel25_due.getDate().toString().length == 1 ? '0' + date_nivel25_due.getDate().toString() : date_nivel25_due.getDate().toString()) + '.' + ((date_nivel25_due.getMonth() + 1).toString().length == 1 ? '0' + (date_nivel25_due.getMonth() + 1).toString() : (date_nivel25_due.getMonth() + 1).toString()) + '.' + date_nivel25_due.getFullYear()


document.getElementById("TA2_start01").innerHTML = dateStart
document.getElementById("TA2_start02").innerHTML = date_nivel01_full
document.getElementById("TA2_start03").innerHTML = date_nivel01_full
document.getElementById("TA2_start04").innerHTML = date_nivel01_full
document.getElementById("TA2_start05").innerHTML = date_nivel01_full
document.getElementById("TA2_start06").innerHTML = date_nivel02_full
document.getElementById("TA2_start07").innerHTML = date_nivel03_full
document.getElementById("TA2_start08").innerHTML = date_nivel03_full
document.getElementById("TA2_start09").innerHTML = date_nivel03_full
document.getElementById("TA2_start10").innerHTML = date_nivel04_full
document.getElementById("TA2_start11").innerHTML = date_nivel05_full
document.getElementById("TA2_start12").innerHTML = date_nivel06_full
document.getElementById("TA2_start13").innerHTML = date_nivel06_full
document.getElementById("TA2_start14").innerHTML = date_nivel06_full
document.getElementById("TA2_start15").innerHTML = date_nivel06_full
document.getElementById("TA2_start16").innerHTML = date_nivel07_full
document.getElementById("TA2_start17").innerHTML = date_nivel07_full
document.getElementById("TA2_start18").innerHTML = date_nivel07_full
document.getElementById("TA2_start19").innerHTML = date_nivel07_full
document.getElementById("TA2_start20").innerHTML = date_nivel08_full
document.getElementById("TA2_start21").innerHTML = date_nivel08_full
document.getElementById("TA2_start22").innerHTML = date_nivel08_full
document.getElementById("TA2_start23").innerHTML = date_nivel08_full
document.getElementById("TA2_start24").innerHTML = date_nivel09_full
document.getElementById("TA2_start25").innerHTML = date_nivel10_full

document.getElementById("TA2_Due01").innerHTML = date_nivel01_due_std
document.getElementById("TA2_Due02").innerHTML = date_nivel02_due_std
document.getElementById("TA2_Due03").innerHTML = date_nivel03_due_std
document.getElementById("TA2_Due04").innerHTML = date_nivel04_due_std
document.getElementById("TA2_Due05").innerHTML = date_nivel05_due_std
document.getElementById("TA2_Due06").innerHTML = date_nivel06_due_std
document.getElementById("TA2_Due07").innerHTML = date_nivel07_due_std
document.getElementById("TA2_Due08").innerHTML = date_nivel08_due_std
document.getElementById("TA2_Due09").innerHTML = date_nivel09_due_std
document.getElementById("TA2_Due10").innerHTML = date_nivel10_due_std
document.getElementById("TA2_Due11").innerHTML = date_nivel11_due_std
document.getElementById("TA2_Due12").innerHTML = date_nivel12_due_std
document.getElementById("TA2_Due13").innerHTML = date_nivel13_due_std
document.getElementById("TA2_Due14").innerHTML = date_nivel14_due_std
document.getElementById("TA2_Due15").innerHTML = date_nivel15_due_std
document.getElementById("TA2_Due16").innerHTML = date_nivel16_due_std
document.getElementById("TA2_Due17").innerHTML = date_nivel17_due_std
document.getElementById("TA2_Due18").innerHTML = date_nivel18_due_std
document.getElementById("TA2_Due19").innerHTML = date_nivel19_due_std
document.getElementById("TA2_Due20").innerHTML = date_nivel20_due_std
document.getElementById("TA2_Due21").innerHTML = date_nivel21_due_std
document.getElementById("TA2_Due22").innerHTML = date_nivel22_due_std
document.getElementById("TA2_Due23").innerHTML = date_nivel23_due_std
document.getElementById("TA2_Due24").innerHTML = date_nivel24_due_std
document.getElementById("TA2_Due25").innerHTML = date_nivel25_due_std


document.getElementById('inputTest1_ta2').innerHTML = ""
document.getElementById('inputTest1_ta2').innerHTML = document.getElementById('fluxo_ta2_vis').innerText

var texto_resumo = `<h1>Total de ${periodototal} dias.</h1>
<h2>Previsão: ${date_nivel25_due_std}.</h2>`
document.getElementById("resumo_final_div").innerHTML = texto_resumo

}

function reiniciar() {
    document.getElementById('cUserID').checked = true
    document.getElementById('cStatus-programa').checked = true
    document.getElementById('cCliente').selectedIndex = 0;
    document.getElementById('cTipo-ecm').checked = true
    document.getElementById('cTipo-item').checked = true
    document.getElementById('usuario').className = "formulario_nok"
    document.getElementById('businesStatus').className = "formulario_nok"
    document.getElementById('customer_ECMtype').className = "formulario_nok"
    document.getElementById('itemtype').className = "formulario_nok"
    document.getElementById("copia_fluxo_vis").className = "botao_nvis"
    document.getElementById("prazoDias").className = "prazo_nvis"
    document.getElementById("div_tipoSubstituido").className = "itemChanged_nvis"
    document.getElementById("Comprados").className = "Comprados_nvis"
    document.getElementById("resumo_final_div").innerHTML = ""
    document.getElementById('cProduto').selectedIndex = 0;
    document.getElementById('TipoMM').selectedIndex = 0;
    document.getElementById("CompradosTipo").className = "Comprados_nvis"
    document.getElementById('cProjeto').value = ""
    document.getElementById("MCMDescription").className = "formulario_nok"
    document.getElementById("ResumoDescricao").style.display = "none"
    document.getElementById("copiar_descricao").className = 'botao_nvis'


}



function InsertItemChanged(){

    CurrentItems = document.getElementById("MM_Changed").innerHTML
    ItemNumber = document.getElementById("ItemNumber").value
    
    ItemNumber ++

    var ChangedMaterial = `<p id="Item${ItemNumber}">${ItemNumber}</p>
    <textarea id="MM${ItemNumber}" style="width: 100px; height: 30px; font-size: 10pt; margin: 5px 2px 5px 3px; resize:none" placeholder="Material [MM]"></textarea>
    <textarea id="DE${ItemNumber}"  style="width: 300px; height: 30px; font-size: 10pt; margin: 5px 2px 5px 3px; resize:none" placeholder="Descrição:"></textarea>
    <textarea id="US${ItemNumber}" style="width: 100px; height: 60px; font-size: 10pt; margin: 5px auto 5px 1px; resize:none" placeholder="Usado em:"></textarea><br>`

    document.getElementById("MM_Changed").innerHTML = CurrentItems + ChangedMaterial    
    document.getElementById("ItemNumber").value = ItemNumber

}

function ta2_description() {
    var userProjetos = document.querySelector('input[name="UserID"]:checked').value;
    var programStatus = document.querySelector('input[name="tStatus-programa"]:checked');
    var customerName = document.getElementById('cCliente').options[document.getElementById('cCliente').selectedIndex];
    var ProductType = document.getElementById('cProduto').options[document.getElementById('cProduto').selectedIndex];
    var itemType = document.querySelector('input[name="tTipo-item"]:checked');
    var ProgramName = document.getElementById("cProjeto");
    var ECMType = document.querySelector('input[name="tTipo-ecm"]:checked');
    var PurchaseType = document.getElementById('TipoMM').options[document.getElementById('TipoMM').selectedIndex];
    var importados = document.getElementById('importados');
    //var teste_tipoProduto = document.getElementById('cProduto').options[document.getElementById('cProduto').selectedIndex].value;

    var ProjetosID_nomeFull = document.getElementById(userProjetos).innerText


    if (customerName.value == "VWL" ||
    customerName.value == "GMB" ||
    customerName.value == "FCA" ||
    customerName.value == "PSA" ||
    customerName.value == "HPE" ||
    customerName.value == "REN" ||
    customerName.value == "KIA" ||
    customerName.value == "HYU" ||
    customerName.value == "CHE" ||
    customerName.value == "ARG" ||
    customerName.value == "NIS") 
    {tdivision = `Light Vehicle (LV)<br>Centro de Lucro: LVOE_MM.`}  else {tdivision = `Commercial Truck & Off Highway (CTOH)<br>Centro de Lucro: OEEC_MM.`}


    if (importados.checked) {PurchaseLocal = PurchaseType.value + " IMPORTADO"}
        else {PurchaseLocal = PurchaseType.value + " NACIONAL"}

    if (itemType.value != "Comprados") {
        MaterialType = `FABRICADO, ${itemType.value}`
    } else {MaterialType = `COMPRADO, ${PurchaseLocal}`}

    //NP ADM, ADM BOM
    if (itemType.id != "radio_FG") {
        MM_Used_In = "<br><br> -Este Material (MM) será usado no Item: <br> -82YYYYYY."
    } else {MM_Used_In = ""}


    //Documento criado por:
    ProjetosID_nomeFull = document.getElementById(userProjetos).innerText

    //PROJETO: CUSTOMER, Product type, ProjectName - Busines Status.


    var TextTitle = `
    Tenneco Clean Air - ${tdivision}.<br><br>
    PLANTA: MOM2 - ${programStatus.value}.
    <br>PROJETO: ${customerName.innerText}, ${ProductType.innerText}, ${ProgramName.value}.<br><br>
    
    Tipo de MCM: ${ECMType.value}.<br><br>

    Tipo de Material: ${MaterialType}.<br><br>`



    var TextCreatedby = `Documento criado por: ${ProjetosID_nomeFull}.`


    var TextNP = `1. 82XXXXXX - Descrição do [MM]${MM_Used_In}<br><br>`

    
    var TextADMBOM = `Na lista técnica do “Descrição do [MM]” nº 82XXXXXX, foi alterado:<br><br>

    <!--TABELA BOM<br><br>-->
    
    DE:/PARA: - "COPIAR DO SHAREPOINT MCM TA2"<br><br>    
        
    Notas:<br>
    Este documento deve ser liberado após ou em conjunto com a MCM 7000XXXXMOM2, por todos os departamentos envolvidos.<br>
    A lista técnica atualizada pode ser consultada usando a data futura 01.01.2050.<br><br>
    
    Motivo: Adequar a lista técnica conforme solicitado por...<br><br>`

    var TextADM = `No desenho do(a) "Descrição do [MM]", nº 82XXXXXX, foi alterado:<br><br>

    "DETALHAR AS MODIFICAÇÕES REALIZADAS NO DESENHO, por exemplo:<br>
    Notas, Tolerâncias e outras especificações técnicas.<br><br>
    
    Notas:<br>
    Solicitar atualização de PPAP junto aos fornecedores.<br>
    Esse documento não altera dados no SAP TA2.<br><br>

    Motivo: Adequar o desenho conforme solicitado por...<br><br>`

  

    if (ECMType.id == "NP") {
        TextBody = TextNP
        
    } else {
        if (ECMType.id == "ADMBOM") {
            TextBody = TextADMBOM
    } else {
        TextBody = TextADM
    }
}

    var TextSummary = `${TextTitle}${TextBody}${TextCreatedby}`
    

    document.getElementById("ResumoDescricao").innerHTML = TextSummary


}
