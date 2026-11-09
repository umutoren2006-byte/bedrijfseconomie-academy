export type Exercise = { id: string; prompt: string; answer: number; unit: string; explanation: string; hint: string; tolerance?: number };
export type Lesson = { slug: string; title: string; section: string; intro: string; formula: string; example: string; steps: string[]; exercises: Exercise[] };
export const lessons: Lesson[] = [
 { slug:"omzet-en-afzet",title:"Omzet en afzet",section:"Basisbegrippen",intro:"Afzet is hoeveel producten een bedrijf verkoopt. Omzet is het totale verkoopbedrag exclusief btw bij een opgegeven verkoopprijs exclusief btw.",formula:"Omzet = afzet × verkoopprijs per stuk",example:"Een winkel verkoopt 80 tassen voor € 25 per stuk (excl. btw). De omzet is 80 × € 25 = € 2.000.",steps:["Bepaal de afzet: 80 stuks.","Neem de verkoopprijs exclusief btw: € 25.","Vermenigvuldig: 80 × 25 = 2.000."],exercises:[
 {id:"omzet1",prompt:"Een winkel verkoopt 120 schriften voor € 3 per stuk (excl. btw). Wat is de omzet?",answer:360,unit:"€",hint:"Vermenigvuldig het aantal verkochte schriften met de verkoopprijs.",explanation:"120 × € 3 = € 360 omzet."},
 {id:"omzet2",prompt:"Een bedrijf heeft € 1.500 omzet en verkoopt artikelen voor € 15 per stuk. Hoeveel artikelen zijn verkocht?",answer:100,unit:"stuks",hint:"Deel de omzet door de verkoopprijs per stuk.",explanation:"€ 1.500 ÷ € 15 = 100 stuks."}]},
 {slug:"kosten-en-winst",title:"Kosten en winst",section:"Basisbegrippen",intro:"Winst ontstaat als de opbrengsten hoger zijn dan de kosten. We gebruiken voor deze introductie een eenvoudige berekening zonder belastingen of andere bijzondere posten.",formula:"Winst = omzet − totale kosten",example:"Een onderneming heeft € 8.000 omzet en € 6.250 kosten. De winst is € 1.750.",steps:["Schrijf de omzet op.","Bepaal de totale kosten.","Trek de kosten van de omzet af."],exercises:[
 {id:"winst1",prompt:"Een onderneming heeft € 5.400 omzet en € 4.100 totale kosten. Bereken de winst.",answer:1300,unit:"€",hint:"Neem omzet min kosten.",explanation:"€ 5.400 − € 4.100 = € 1.300 winst."},
 {id:"winst2",prompt:"Een onderneming heeft € 2.800 omzet en € 3.200 kosten. Bereken het resultaat (een verlies mag negatief zijn).",answer:-400,unit:"€",hint:"Het resultaat kan lager dan nul zijn.",explanation:"€ 2.800 − € 3.200 = −€ 400; een verlies van € 400."}]},
 {slug:"brutowinst",title:"Brutowinst",section:"Handel",intro:"Bij een handelsbedrijf is brutowinst het verschil tussen netto-omzet en inkoopwaarde van de omzet. Overige bedrijfskosten zijn hier nog niet afgetrokken.",formula:"Brutowinst = netto-omzet − inkoopwaarde van de omzet",example:"Een winkel heeft € 12.000 netto-omzet en € 7.500 inkoopwaarde van de omzet. De brutowinst is € 4.500.",steps:["Zoek de netto-omzet.","Zoek de inkoopwaarde van de omzet.","Trek de inkoopwaarde af van de netto-omzet."],exercises:[
 {id:"bruto1",prompt:"De netto-omzet bedraagt € 9.200 en de inkoopwaarde van de omzet is € 5.600. Wat is de brutowinst?",answer:3600,unit:"€",hint:"Trek de inkoopwaarde van de netto-omzet af.",explanation:"€ 9.200 − € 5.600 = € 3.600 brutowinst."},
 {id:"bruto2",prompt:"Een bedrijf heeft € 4.000 brutowinst en € 6.000 inkoopwaarde van de omzet. Hoe hoog is de netto-omzet?",answer:10000,unit:"€",hint:"Tel brutowinst en inkoopwaarde bij elkaar op.",explanation:"€ 4.000 + € 6.000 = € 10.000 netto-omzet."}]}
];
export function gradeNumeric(input: string, expected: number, tolerance = 0.005): boolean | null {
 const text = input.trim().replace(/[€\s]/g,"");
 if (!/^-?\d+(?:[.,]\d{1,2})?$/.test(text)) return null;
 const actual = Number(text.replace(",","."));
 return Number.isFinite(actual) ? Math.abs(actual - expected) <= tolerance : null;
}
