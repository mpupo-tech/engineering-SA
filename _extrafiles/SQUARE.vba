Sub SQUARE()
'
' SQUARE Macro
'
    
    If MsgBox("Deseja aplicar os filtros do SAP TA2 e PLP?", vbOKCancel, "Filtros do TA2/PLP") = vbCancel Then
        MsgBox "O processo foi interrompido."
        Windows("SQUARE_REV1.xlsm").Activate
        ActiveWindow.Close
        Exit Sub
        End If
    

'   ANALISE TA2
            
            
            
    If Range("A1").Value = "Plant for mat." And Range("E1").Value = "Task text" And Range("M1").Value = "Created By" Then
            
            
    Application.ScreenUpdating = False

    Range("O1").Value = "Aguardando Aprovação"
    
    Range("P1").Value = "Setor"
    
    Range("Q1").Value = "NP/ADM"

    Range("R1").Value = "IW/DELAY"
    
    Range("S1").Value = "Custumer"
        
    Range("T1").Value = "Analise de ERROS"
    
    Range("U1").Value = "MCMs On Hold"

    
    Rows("1:1").Select
    Selection.AutoFilter
    ActiveSheet.AutoFilter.Sort.SortFields.Clear
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("B2:B10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("D2:D10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("I2:I10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    
    With ActiveSheet.AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    
'   SELECIONAR A LINHA 2 E INSERIR 5 LINHAS EM BRANCO
    
    Rows("2:6").Select
    Selection.Insert Shift:=xlDown, CopyOrigin:=xlFormatFromLeftOrAbove
    
    
'   FORMULAS
'   Dias em analise - Coluna O
    Range("O7").Select
    ActiveCell.FormulaR1C1 = _
        "=IF(RC[-1]=""TSRL OPEN"",IF(AND(RC[-11]=""0001"",RC[-6]=""""),R1C23-RC[-7],IF(AND(RC[-13]=R[-1]C[-13],RC[-11]<>R[-1]C[-11]),R1C23-R[-1]C[-6]-VLOOKUP(RC[-10],[SQUARE_REV1.xlsm]TA2!C5:C6,2,FALSE),IF(AND(RC[-13]=R[-2]C[-13],RC[-11]<>R[-2]C[-11]),R1C23-R[-2]C[-6]-VLOOKUP(RC[-10],[SQUARE_REV1.xlsm]TA2!C5:C6,2,FALSE),IF(AND(RC[-13]=R[-3]C[-13],RC[-11]<>R[-3]C[-11]),R1C23-" & _
        "R[-3]C[-6]-VLOOKUP(RC[-10],[SQUARE_REV1.xlsm]TA2!C5:C6,2,FALSE),IF(AND(RC[-13]=R[-4]C[-13],RC[-11]<>R[-4]C[-11]),R1C23-R[-4]C[-6]-VLOOKUP(RC[-10],[SQUARE_REV1.xlsm]TA2!C5:C6,2,FALSE),IF(AND(RC[-13]=R[-5]C[-13],RC[-11]<>R[-5]C[-11]),R1C23-R[-5]C[-6]-VLOOKUP(RC[-10],[SQUARE_REV1.xlsm]TA2!C5:C6,2,FALSE))))))),"""")" & _
        ""
        Selection.AutoFill Destination:=Range("O7:O10000"), Type:=xlFillDefault
    
    Range("Q7").Select
        ActiveCell.FormulaR1C1 = _
                "=IF(COUNTIF('[SQUARE_REV1.xlsm]TEN_AR-on_hold'!C1,RC[-15])>0,""ON HOLD"",IF(RIGHT(RC[-14],2)=""NP"",""NP"",IF(OR(RIGHT(RC[-14],5)=""(BOM)"",RIGHT(RC[-14],3)=""ADM""),""ADM"",""VERIFICAR"")))"
        Selection.AutoFill Destination:=Range("Q7:Q10000"), Type:=xlFillDefault
          
          Range("R7").Select
        ActiveCell.FormulaR1C1 = _
            "=IF(RC[-3]="""","""",IF(OR(RC[-3]<=0,RC[-13]=""SAP PCP - Ponto de Corte."",RC[-13]=""SAP CONTABILIDADE - Calcular Custos.""),RC[-1]&""_IW"",RC[-1]&""_DL""))"
            Selection.AutoFill Destination:=Range("R7:R10000"), Type:=xlFillDefault
        
            Range("S7").Select
                ActiveCell.FormulaR1C1 = "=IF(COUNTIF('[SQUARE_REV1.xlsm]TEN_AR-on_hold'!C1,RC[-17])>0,""ON HOLD"",IF(LEFT(RC[-16],4)=""MOM2"",MID(RC[-16],6,2),MID(RC[-16],4,2)))"
                Selection.AutoFill Destination:=Range("S7:S10000"), Type:=xlFillDefault
    
            Range("W1").Select
                ActiveCell.FormulaR1C1 = "=IF(RC[-1]<>"""",RC[-1],TODAY())"
                Selection.NumberFormat = "m/d/yyyy"
                With Selection
                    .HorizontalAlignment = xlCenter
                    .VerticalAlignment = xlBottom
                    .WrapText = False
                    .Orientation = 0
                    .AddIndent = False
                    .IndentLevel = 0
                    .ShrinkToFit = False
                    .ReadingOrder = xlContext
                    .MergeCells = False
                End With

                Columns("W:W").Select
                    Selection.ColumnWidth = 15
                
            Range("U7").Select
                ActiveCell.FormulaR1C1 = _
                "=COUNTIF('[SQUARE_REV1.xlsm]TEN_AR-on_hold'!C1,RC[-19])"
                Selection.AutoFill Destination:=Range("U7:U10000")
    
    Range("T7").Select
    ActiveCell.FormulaR1C1 = _
        "=IF(RC[-6]<>""TSOS OPEN"","""",IF(AND(RC[-18]=R[-6]C[-18],RC[-16]=R[-5]C[-16],RC[-16]<>R[-6]C[-16],OR(R[-6]C[-6]<>""TSCO FUAC CLSD"",R[-6]C[-6]<>""TSCO TSSC FUAC CLSD"")),"""",IF(AND(RC[-18]=R[-6]C[-18],RC[-16]=R[-5]C[-16],RC[-16]<>R[-6]C[-16],OR(R[-6]C[-6]<>""TSCO FUAC CLSD"",R[-6]C[-6]<>""TSCO TSSC FUAC CLSD"")),"""",IF(AND(RC[-18]=R[-5]C[-18],RC[-16]=R[-4]C[-16]," & _
        "RC[-16]<>R[-5]C[-16],R[-5]C[-6]<>""TSCO FUAC CLSD""),"""",IF(AND(RC[-18]=R[-4]C[-18],RC[-16]=R[-3]C[-16],RC[-16]<>R[-4]C[-16],R[-4]C[-6]<>""TSCO FUAC CLSD""),"""",IF(AND(RC[-18]=R[-3]C[-18],RC[-16]=R[-2]C[-16],RC[-16]<>R[-3]C[-16],R[-3]C[-6]<>""TSCO FUAC CLSD""),"""",IF(AND(RC[-18]=R[-2]C[-18],RC[-16]=R[-1]C[-16],RC[-16]<>R[-2]C[-16],R[-2]C[-6]<>""TSCO FUAC CLSD"")," & _
        """"",IF(AND(RC[-18]=R[-1]C[-18],RC[-16]<>R[-1]C[-16],R[-1]C[-6]<>""TSCO FUAC CLSD""),"""",""ERRO - O fluxo de aprovação está parado.""))))))))" & _
        ""
    Selection.AutoFill Destination:=Range("T7:T10000"), Type:=xlFillDefault
        

    
    
    
    Range("O7:O10000").Select
    
    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlGreater, _
        Formula1:="=0"
        
        Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .ThemeColor = xlThemeColorDark1
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .Color = 255
        .TintAndShade = 0
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    

    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlEqual, _
        Formula1:="=0"
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .TintAndShade = 0
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .ThemeColor = xlThemeColorAccent4
        .TintAndShade = 0.799981688894314
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    
    
    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlLess, _
        Formula1:="=0"
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .Italic = False
        .TintAndShade = 0
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .ThemeColor = xlThemeColorAccent6
        .TintAndShade = 0.799981688894314
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    
    Range("P7").Select
    ActiveCell.FormulaR1C1 = "=IF(RC[-5]="""","""",VLOOKUP(RC[-5],[SQUARE_REV1.xlsm]TA2!C1:C2,2,FALSE))"
    Selection.AutoFill Destination:=Range("P7:P10000"), Type:=xlFillDefault
    
   

    
'   ISOLANDO AS FORMULAS E REMOVENDO AS LINHAS 2 A 6 - INICIO

    Columns("O:U").Select
    Selection.Copy
    Range("O1").Select
    Selection.PasteSpecial Paste:=xlPasteValues
    
    Rows("2:6").Select
    Selection.Delete Shift:=xlUp
    
'   ISOLANDO AS FORMULAS E REMOVENDO AS LINHAS 2 A 6 - FIM

'   OCULTAR ON HOLD
  
    Range("U2").Select
    ActiveSheet.Range("$A$1:$U$10000").AutoFilter Field:=21, Criteria1:="0", Operator:=xlOr, Criteria2:="="

'   CRIANDO SUBTOTAL

    Range("N9997").Select
    ActiveCell.FormulaR1C1 = "=""TOTAL ""&SUBTOTAL(3,R[-9995]C:R[-1]C)"
    
    With Selection.Font
        .Name = "Calibri"
        .Size = 20
        .Bold = True
        .Color = -16776961
    End With
    
    Rows("1:1").Select
    Cells.EntireColumn.AutoFit
    Selection.Font.Bold = True
    
    Columns("F:J").Select
    Selection.EntireColumn.Hidden = True
    
    'Criando nova guia
    
   Range("K9999").Value = "PURCHASING"
    Range("K10000").Value = "PROCESS ENG."
    Range("K10001").Value = "LOGISTIC"
    Range("K10002").Value = "QUALITY"
    Range("K10003").Value = "FINANCE"
    Range("K10004").Value = "FISCAL"
    Range("K10005").Value = "SALES"
    Range("K10006").Value = "PRODUCT ENG."
    Range("K10007").Value = "PROJECT ENG."
    Range("L9998").Value = "NP_DL"
    Range("M9998").Value = "NP_IW"
    Range("N9998").Value = "ADM_DL"
    Range("O9998").Value = "ADM_IW"
    
    Range("L9999").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C16,RC11,C18,R9998C)"
    Range("M9999").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C16,RC11,C18,R9998C)"
    
    Range("N9999").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C16,RC11,C18,R9998C)"
    Range("O9999").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C16,RC11,C18,R9998C)"

    Range("P10008").Select
    ActiveCell.FormulaR1C1 = "=SUM(R[-9]C:R[-1]C)"
    Range("Q10008").Select
    ActiveCell.FormulaR1C1 = "=SUM(R[-9]C:R[-1]C)"
   
    
    Range("K10012").Value = "FO"
    Range("K10013").Value = "MA"
    Range("K10014").Value = "MB"
    Range("K10015").Value = "GM"
    Range("K10016").Value = "CN"
    Range("K10017").Value = "SC"
    Range("K10018").Value = "VW"
    Range("K10019").Value = "TE"
    Range("K10020").Value = "FC"
    Range("K10021").Value = "RE"
    Range("K10022").Value = "PS"
    Range("K10023").Value = "HP"

    Range("L10012").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C19,RC11,C18,R9998C)"
    Range("M10012").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C19,RC11,C18,R9998C)"
    Range("N10012").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C19,RC11,C18,R9998C)"
    Range("O10012").Select
    ActiveCell.FormulaR1C1 = "=COUNTIFS(C19,RC11,C18,R9998C)"
    Range("P10008").Select
    ActiveCell.FormulaR1C1 = "=SUM(R[-9]C:R[-1]C)"
    Range("Q10008").Select
    ActiveCell.FormulaR1C1 = "=SUM(R[-9]C:R[-1]C)"

'   INICIO REMOVE FORMULA GRAFICO
    
    Range("L9999:O9999").Select
    Selection.Copy
    Range("L9999:O10007").Select
    ActiveSheet.Paste
    Application.CutCopyMode = False


    Range("P10008:Q10008").Select
    Selection.Copy
    ActiveSheet.Paste
    Application.CutCopyMode = False
        
    Range("L10012:O10012").Select
    Selection.Copy
    Range("L10012:O10023").Select
    ActiveSheet.Paste
    Application.CutCopyMode = False
    
    Range("K9998:O10023").Select
    Selection.Copy
    Range("K9998").Select
    Selection.PasteSpecial Paste:=xlPasteValues, Operation:=xlNone, SkipBlanks _
        :=False, Transpose:=False
    Application.CutCopyMode = False

    Range("P9998").Select
    ActiveCell.FormulaR1C1 = "MCM DELAY"
    Range("P9999").Select
    ActiveCell.FormulaR1C1 = "=SUM(RC[-4],RC[-2])"
    'Range("P9999").Select
    'Selection.FillDown
    Range("Q9998").Select
    ActiveCell.FormulaR1C1 = "MCM TOTAL"
    Range("Q9999").Select
    ActiveCell.FormulaR1C1 = "=SUM(RC[-5]:RC[-2])"
    Range("P9999:Q9999").Select
    Selection.Copy
    Range("P9999:Q10007").Select
    ActiveSheet.Paste
    Application.CutCopyMode = False

    Range("P9998:Q10022").Select
    Selection.Copy
    Range("P9998").Select
    Selection.PasteSpecial Paste:=xlPasteValues, Operation:=xlNone, SkipBlanks _
        :=False, Transpose:=False

'   FIM REMOVE FORMULA GRAFICO




'   INICIO OCULDA DADOS GRAFICO

    Columns("R:U").Select
    Selection.EntireColumn.Hidden = True

    'Rows("9998:10022").Select
    'Selection.EntireRow.Hidden = True

    
'   FIM OCULDA DADOS GRAFICO
    
    ActiveWindow.FreezePanes = False
    Application.ScreenUpdating = True
    

'   CONGELAR PAINEL

    'Range("A2").Select
    Range("C2").Select
    ActiveWindow.FreezePanes = True
    ActiveSheet.Range("$A$1:$P$9997").AutoFilter Field:=14, Criteria1:="TSRL OPEN"
    Range("N9997").Select
    
    Windows("SQUARE_REV1.xlsm").Activate
    ActiveWindow.Close
    
        Exit Sub
        
        
        Else:
        
        End If
        
        
        
        
        
        
        
'   ANALISE GPDM
        
        
        
 If Range("C1").Value = "Notific. Status" And Range("E1").Value = "Author" And Range("M1").Value = "DescEmpl.Resp." Then
            
            
    Application.ScreenUpdating = False

    Range("Q1").Value = "Dias em analise"
    Range("R1").Value = "Setor"
    Range("S1").Value = "NP/ADM"
    Range("T1").Value = "IW/DELAY"
    Range("U1").Value = "Custumer"
    
    
'    Range("P1").Select
'    ActiveCell.FormulaR1C1 = "Dias para aprovar"
    
    Rows("1:1").Select
    Selection.AutoFilter
    ActiveSheet.AutoFilter.Sort.SortFields.Clear
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("B2:B10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("F2:F10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    ActiveSheet.AutoFilter.Sort.SortFields.Add Key:=Range("O2:O10000"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
    
    With ActiveSheet.AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    
    
'   FORMULAS
'   Dias em analise - Coluna O
    Range("Q2").Select
    ActiveCell.FormulaR1C1 = "=IF(RC[-13]=""TSRL OPEN"",(TODAY()-RC[-2])*1,0)"
    Selection.AutoFill Destination:=Range("Q2:Q10000"), Type:=xlFillDefault
    
    Range("R2").Select
    ActiveCell.FormulaR1C1 = "=VLOOKUP(RC[-7],[SQUARE_REV1.xlsm]TA2!C1:C2,2,FALSE)"
    Selection.AutoFill Destination:=Range("R2:R10000"), Type:=xlFillDefault

    Range("S2").Select
    ActiveCell.FormulaR1C1 = "=IF(LEFT(RC[-3],2)=""NP"",""NP"",IF(LEFT(RC[-3],2)=""AD"",""ADM"",""VERIFICAR""))"
    Selection.AutoFill Destination:=Range("S2:S10000"), Type:=xlFillDefault


    Range("T2").Select
    ActiveCell.FormulaR1C1 = "=IF(RC[-1]="""","""",IF(RC[-3]>0,RC[-1]&""_DL"",RC[-1]&""_IT""))"
    Selection.AutoFill Destination:=Range("T2:T10000"), Type:=xlFillDefault


    Range("U2").Select
    ActiveCell.FormulaR1C1 = "=IF(RC[-2]="""","""",IF(RC[-2]=""NP"",MID(RC[-5],12,2),IF(RC[-2]=""ADM"",MID(RC[-5],13,2),""VERIFICAR"")))"
    Selection.AutoFill Destination:=Range("U2:U10000"), Type:=xlFillDefault


    
    Range("Q2:Q10000").Select
    
    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlGreater, _
        Formula1:="=0"
        
        Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .ThemeColor = xlThemeColorDark1
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .Color = 255
        .TintAndShade = 0
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    

    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlEqual, _
        Formula1:="=0"
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .TintAndShade = 0
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .ThemeColor = xlThemeColorAccent4
        .TintAndShade = 0.799981688894314
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    
    
    Selection.FormatConditions.Add Type:=xlCellValue, Operator:=xlLess, _
        Formula1:="=0"
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority
    With Selection.FormatConditions(1).Font
        .Bold = True
        .Italic = False
        .TintAndShade = 0
    End With
    With Selection.FormatConditions(1).Interior
        .PatternColorIndex = xlAutomatic
        .ThemeColor = xlThemeColorAccent6
        .TintAndShade = 0.799981688894314
    End With
    Selection.FormatConditions(1).StopIfTrue = False
    
    
'   ISOLANDO AS FORMULAS E REMOVENDO AS LINHAS 2 A 6
    Columns("Q:U").Select
    Selection.Copy
    Range("Q1").Select
    Selection.PasteSpecial Paste:=xlPasteValues
    
'    Rows("2:6").Select
'    Selection.Delete Shift:=xlUp
    
'   CRIANDO SUBTOTAL

    Range("P10002").Select
    ActiveCell.FormulaR1C1 = "=""TOTAL ""&SUBTOTAL(3,R[-10000]C:R[-1]C)"
    
    With Selection.Font
        .Name = "Calibri"
        .Size = 20
        .Bold = True
        .Color = -16776961
    End With
    
    Rows("1:1").Select
    Cells.EntireColumn.AutoFit
    Selection.Font.Bold = True
    
    
    ActiveWindow.FreezePanes = False
    Application.ScreenUpdating = True
        

    

'   CONGELAR PAINEL

    'Range("A2").Select
    Range("C2").Select
    ActiveWindow.FreezePanes = True
    ActiveSheet.Range("$A$1:$P$10000").AutoFilter Field:=4, Criteria1:="TSRL OPEN"
    Range("P10002").Select

       
        Else:
            MsgBox "A planilha aberta não atende os requisitos necessários."
            Windows("SQUARE_REV1.xlsm").Activate
            ActiveWindow.Close
        Exit Sub
        End If
        
    Windows("SQUARE_REV1.xlsm").Activate
    ActiveWindow.Close
'
End Sub






