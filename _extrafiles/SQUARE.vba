'DAIMLER DAIMLER | 2Box BR900

'https://tenneco.sharepoint.com/sites/CASAEN/SAENG/Lists/DAIMLER 2Box BR900/Overview.aspx

'DETERMINAÇÃO DAS VARIANTES

=
IF(([Região]&[Veículo]&[Motor])="BrasilBUS LO4 cilindros","01",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS OF4 cilindros","02",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS OF6 cilindros, SICKE","03",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS OF6 cilindros","03",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS CBC/XBC6 cilindros, SICKE","04",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS CBC/XBC6 cilindros","04",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS OF RURAL4 cilindros","05",
IF(OR(([Região]&[Veículo]&[Motor])="BrasilBUS OF 17266 cilindros",([Região]&[Veículo]&[Motor])="BrasilBUS OF 17266 cilindros, SICKE"),"06",
IF(([Região]&[Veículo]&[Motor])="BrasilBUS CBC/XBC4 cilindros","07",
IF(OR(([Região]&[Veículo]&[Motor])="BrasilTRUCK ATEGO4 cilindros",([Região]&[Veículo]&[Motor])="BrasilTRUCK ATEGO4 cilindros, SICKE"),"08",
IF(OR(([Região]&[Veículo]&[Motor])="BrasilTRUCK ACCELO4 cilindros",([Região]&[Veículo]&[Motor])="BrasilTRUCK ACCELO4 cilindros, SICKE"),"09",
IF(([Região]&[Veículo]&[Motor])="BrasilTRUCK ATEGO6 cilindros, SICKE","10",
IF(([Região]&[Veículo]&[Motor])="BrasilTRUCK ATEGO6 cilindros","10",
IF(([Região]&[Veículo]&[Motor])="MéxicoBUS CBC/XBC6 cilindros, SICKE","11",
IF(([Região]&[Veículo]&[Motor])="MéxicoBUS CBC/XBC6 cilindros","11",
IF(([Região]&[Veículo]&[Motor])="MéxicoBUS CBC/XBC4 cilindros","12",
IF(([Região]&[Veículo]&[Motor])="MéxicoBUS LO4 cilindros","13",
IF(([Região]&[Veículo]&[Motor])="MéxicoBUS MBO/MBC-O4 cilindros","14","99"))))))))))))))))))



'1	BrasilBUS LO4 cilindros
'2	BrasilBUS OF4 cilindros
'3	BrasilBUS OF6 cilindros
'4	BrasilBUS CBC/XBC6 cilindros
'5	BrasilBUS OF RURAL4 cilindros
'6	BrasilBUS OF 17266 cilindros
'7	BrasilBUS CBC/XBC4 cilindros
'8	BrasilTRUCK ATEGO4 cilindros
'9	BrasilTRUCK ACCELO4 cilindros
'10	BrasilTRUCK ATEGO6 cilindros
'11	MéxicoBUS CBC/XBC6 cilindros
'12	MéxicoBUS CBC/XBC4 cilindros
'13	MéxicoBUS LO4 cilindros
'14	MéxicoBUS MBO/MBC-O4 cilindros



