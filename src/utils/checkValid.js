// Eğer ki parametre olarak aldığı değer tanımlıysa o değeri
// geri döndüren ama tanımsız ise "BİLİNMİYOR" metni döndüren fonksiyonu yazalım.
const checkValid = (value) => {
return !value ? "BİLİNMİYOR" : value;
}
export default checkValid;