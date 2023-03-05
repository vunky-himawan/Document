# <b> MySql </b>

## **1. Tipe Data Number**

1. Number<br>
   Tipe data number ada 3 jenis : 1. Integer 2. Floating Point 3. Decimal<br>

### **A. Tipe data Integer**

| Type       | Length in Byte | Minimum Signed      | Maximum Signed    | Minimum Unsigned | Maximum Unsigned     |
| ---------- | -------------- | ------------------- | ----------------- | ---------------- | -------------------- |
| Tiny Int   | 1              | -128                | 127               | 0                | 255                  |
| Small Int  | 2              | -32768              | 32767             | 0                | 65535                |
| Medium Int | 3              | -8388608            | 8388607           | 0                | 16777215             |
| Int        | 4              | -2147483648         | 2147483647        | 0                | 4294967295           |
| Big Int    | 8              | -922337203685477580 | 92237203685477507 | 0                | 18446744073709551615 |

<b>Rata-rata yang digunakan adalah Int</b>
<b>Jika kurang dari 2M menggunakan int dan juka lebih menggunakan BigInt</b>

### **B. Tipe data Floating Point**

| Type   | Length in Byte | Minimum Signed           | Maximum Signed           | Minimum Unsigned               | Maximum Unsigned        |
| ------ | -------------- | ------------------------ | ------------------------ | ------------------------------ | ----------------------- |
| Float  | 4              | -3.402823466E+38         | -1.175494351E-38         | 1.175494351E-38                | 3.402823466E-38         |
| Double | 8              | -1.7976931348623157E+308 | -2.2250738585072014E-308 | 0, and 2.2250738585072014E-308 | 1.7976931348623157E+308 |

### **C. Tipe data Decimal**

| Decimal      | Min     | Max    |
| ------------ | ------- | ------ |
| Decimal(5,2) | -999.99 | 999.99 |
| Decimal(5.0) | -99999  | 99999  |
| Decimal(3.1) | -99.9   | 99.9   |
| Decimal(3)   | -999    | 999    |

**Decimal (5,2)**

5 : Jumlah Keseluruhan

2 : Angka dibelakang koma

### **D. Number Attribute**

| Type     | Deskripsi               | Contoh         | Hasil |
| -------- | ----------------------- | -------------- | ----- |
| Type(N)  | Menentukan jumlah angka | int(5)         | 99999 |
| Zerofill | Menambahkan angka 0     | int(5)zerofill | 0009  |

## **2. Tipe Data String**

### **A. Tipe Data CHAR dan VARCHAR**

- Kita bisa menentukan jumlah maximal karakter yang dapat ditampung oleh CHAR dan VARCHAR dengan tanda kurung dan memasukkan angka didalamnya.
- CHAR (10) dan VARCHAR (10) artinya tipe data tersebut menampung maximal 10 karakter.
- Maximum ukuran CHAR dan VARCHAR adalah 65535 karakter
- Perbedaan CHAR dan VARCHAR

| Value      | CHAR(4) | Storage Require | VARCHAR(4) | Storage Require |
| ---------- | ------- | --------------- | ---------- | --------------- |
| ' '        | '----'  | 4 Bytes         | ' '        | 1 Byte          |
| 'ab'       | 'ab--'  | 4 Bytes         | 'ab'       | 3 Byte          |
| 'abcd      | 'abcd'  | 4 Bytes         | 'abcd'     | 5 Byte          |
| 'abcdefgh' | 'abcd'  | 4 Bytes         | 'abcd'     | 5 Byte          |

**Sering digunakan : VARCHAR**

### **B. Tipe Data TEXT**

- Tipe data TEXT tidak mempunyai panjang maximal
- Terdapat 4 Tipe data Text

| Type        | Max Karakter | Storage  |
| ----------- | ------------ | -------- |
| TINY TEXT   | 255          | 256 byte |
| TEXT        | 65535        | 64 kb    |
| MEDIUM TEXT | 16777215     | 16 MB    |
| LONG TEXT   | 4294967295   | 4 GB     |

### **C. Tipe Data ENUM**

- ENUM adalah tipe data String yang bisa kita tentukan pilihan-pilihannya
- Misal ENUM('Pria', 'Wanita'), artinya kita hanya bisa menerima data pria atau wanita

### **D. Tipe Data DATE & TIME**

| Type      | Format              | Contoh              |
| --------- | ------------------- | ------------------- |
| DATE      | YYYY-MM-DD          | 2020-10-10          |
| DATETIME  | YYYY-MM-DD HH:MM:SS | 2020-10-10 10:10:10 |
| TIMESTAMP | YYYY-MM-DD HH:MM:SS | 2020-10-10 10:10:10 |
| TIME      | HH:MM:SS            | 10:10:10            |
| YEAR      | YYYY                | 2020                |

**TIMESTAMP biasa digunakan ketia ingin menambahkkan informasi seperti (created_at)**

## **3. Tipe Data BOOLEAN**

## **4. Tipe Data Lainnya**

1. BLOB
2. SPATIAL
3. JSON
4. SET
5. dll.

## **5. TABLE**

Untuk Mengakses MySql "mysql -uroot -p"<br>
Beberapa perintah dasar :

```sql
SHOW ENGINE; (Untuk melihat engine)
SHOW TABLES; (Untuk melihat table)
SHOW DATABASES; (Untuk melihat database)
USE nama_databases; (Untuk mengakses database)
CREATE DATABASE nama_database; (Untuk membuat database baru)
```

### **A. Membuat TABLE**

```sql
CREATE TABLE nama_tabel (
  nama_kolom1 tipe data,
  nama_kolom2 tipe data,
  .... .....,
  .... .....
) ENGINE = InnoDB;
```

### **B. Melihat Struktur Tabel**

```sql
DESCRIBE nama_tabel;
DESC nama_tabel;
SHOW CREATE TABLE nama_tabel;
```

### **C. Mengubah Tabel**

```sql
ALTER TABLE nama_tabel
  ADD COLUMN nama_kolom tipe data, (Menambahkan kolom)
  DROP COLUMN nama_kolom, (Menghapus kolom)
  RENAME COLUMN nama_kolom to nama_baru, (Rename kolom)
  MODIFY nama VARCHAR(100) AFTER jumlah, (Merubah tipe data dan memindah)
  MODIFY nama VARCHAR(100) FIRST; (Memindah kolom menjadi paling depan)
```

**Setiap perintah harus diakhiri tanda ";" kecuali jika lebih dari 1.**

## **6. NULL VALUE**

- NULL adalah nilai ketika tidak mengisi data kedalam kolom
- Jika tidak ingin NULL bisa menambahkan "NOT NULL" ketika membuat tabel / kolom.
- Contoh :

```sql
CREATE TABLE products (
  nama_products VARCHAR(100) NOT NULL
) ENGINE : InnoDB;
```

## **7. DEFAULT VALUE**

- Untuk menambahkan DEFAULT VALUE yaitu dengan perintah "DEFAULT nilai"
- Contoh

```sql
CREATE TABLE products (
  tgl_masuk TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE : InnoDB;
```

## **8. Membuat Ulang Tabel**

- Untuk menghapus semua kolom yaitu dengan printah

```sql
TRUNCATE nama_tabel
```

- Jika ingin menghapus permanen bisa dengan menggunakan

```sql
DROP TABLE nama_tabel;
```

## **9. Mengisi Tabel**

```sql
INSERT INTO nama_tabel (nama_kolom, nama_kolom, ...)
VALUES (isi1, isi2, ...);
```

- Berurutan sesuai dengan nama_kolom pada insert

## **10. Menampilkan Tabel**

```sql
SELECT * FROM nama_tabel;
```

- Untuk menampilkan semua kolom

## **11. Mengisi Beberapa Baris Sekaligus**

```sql
INSERT INTO nama_tabel (nama_kolom1, nama_kolom2, ...)
VALUES  (isi1, isi2, ...),
        (isi1, isi2, ...),
        ......;
```

## **12. Menampilkan Beberapa Kolom Saja**

```sql
SELECT nama_kolom.nama_kolom ... FROM nama_tabel;
```

## **13. Primary Key**

- Primary Key adalah kolom yang sebagai id dari tabel
- Primary key adalah identitas untuk setiap baris data dalam tabel
- Primary key harus unik

```sql
CREATE TABEL products (
  id_products INT NOT NULL,
  PRIMARY KEY(id_products)
) ENGINE : InnoDB;
```

## **14. Primary Key Multiple Column**

- Disarankan untuk tetap menggunakan satu kolom ketika membuat primary key
- Kecuali ada kasus khusus, seperti membuat tabel yang berisi Many to Many

## **15. Mencari Data (WHERE CLAUSE)**

```sql
SELECT * FROM nama_tabel WHERE nama_kolom = nilai;

SELECT * FROM mahasiswa WHERE nim = 65463156;
```

## **16. Update Data**

```sql
UPDATE nama_tabel
  SET nama_kolom = nilai,
  ....
  WHERE nama_kolom = nilai (atau kata kunci yang ingin diganti)
  misal : id = 'P0001' (primary key)
```

- Conto : Menambah / Menaikkan harga

```sql
UPDATE products
  SET harga_product = harga_product + nilai
WHERE ID = '00014';
```

## **17. Menghapus Data**

```sql
DELETE FROM nama_tabel
WHERE id = 'P0001';
```

## **18. Alias Untuk Kolom**

- Alias digunakan untuk mengubah nama tabel ketika melakukan SELECT

```sql
SELECT nama_kolom AS 'Alias' FROM nama_tabel;
```

## **19. Alias Untuk Tabel**

```sql
SELECT alias_tabel.nama_kolom AS "alias_kolom"
FROM nama_tabel AS "alias_tabel";
```

## **20. WHERE Operator**

### **A. Operator LIKE**

- LIKE digunakan untuk mencari data dengan karakter tertentu

```sql
SELECT * FROM nama_tabel WHERE nama_kolom LIKE %value%
```

| Operator     | Hasil                   |
| ------------ | ----------------------- |
| LIKE 'b%'    | String dengan awalan b  |
| LIKE '%a'    | String dengan akhiran a |
| LIKE '%mie%' | String berisi kata mie  |
| NOT LIKE     | Tidak Like              |

### **B. NULL Operator**

- Untuk mencari kolom yang memiliki nilai NULL
- IS NULL, Untuk mencari data yang null
- IS NOT NULL, untuk mencari data yang tidak null

```sql
SELECT * FROM nama_tabel WHERE nama_kolom IS NULL;
```

### **C. BETWEEN Operator**

- Untuk mencari nilai diantara
- Ada 2 operator : BETWEEN dan NOT_BETWEEN

```sql
SELECT * FROM nama_tabel WHERE nama_kolom BETWEEN value AND value;
```

### **D. IN Operator**

- Operator IN adalah operator untuk melakukan pencarian sebuah kolom dengan beberapa nilai

```sql
SELECT * FROM nama_tabel WHERE nama_kolom IN ('value', 'value');
```

## **21. ORDER BY Clause (Mengurutkan Data)**

- ORDER BY Clause digunakan untuk mengurutkan data berdasarkan kolom yang dipilih, dan jenis urutan (ASC, atau DESC)
- ASC adalah default

```sql
SELECT * FROM nama_tabel ORDER BY nama_kolom ASC, nama_kolom DESC;
```

## **22. LIMIT Clause (Membatasi Jumlah Data)**

```sql
SELECT * FROM nama_tabel WHERE nama_kolom > 0 ORDER BY PRICE LIMIT 2;
```

### **Skip Data**

```sql
LIMIT 2,2; Angka pertama adalah nomor data yang akan diambil
```

## **23. SELECT DISTINCT Data (Menghilangkan Data Duplikat)**

- Jika kita ingin menghilangkan data-data duplikat tersebut, kita bisa menggunakan SELECT dengan tambahan DISTINCT sebelum nama kolom

```sql
SELECT * DISTINCT nama_kolom FROM nama_tabel;
```

## **24. Aritmatic Operator**

| Nama   | Deskripsi                    |
| ------ | ---------------------------- |
| %, MOD | Sisa Bagi                    |
| \*     | Kali                         |
| +      | Tambah                       |
| -      | Pengurangan                  |
| -      | - Didepan angka atau negatif |
| /      | Membagi                      |
| DI     | Membagi menjadi Integer      |

```sql
SELECT nama_kolom, nama_kolom DIV 1000 AS 'PRICE in k' FROM nama_tabel;
```

## **25. Mathematical Function**

- Ini adalah kumpulan Function yang terdapat di Mysql yang bisa kita gunakan sebagai fungsi-fungsi matematika

```sql
SELECT PI();
SELECT POWER(10,2);
SELECT COS(10);
SELECT SIN(10);
SELECT TAN(10);
```

**Masih banyak Function yang lainnya**

## **26. AUTO INCREMENT**

- Dengan menggunakan auto increment, kita tidak peru lalu memasukkan data primary key, ini akan otomatis dibuat oleh Mysql

```sql
CREATE TABLE products (
  id_product INT NOT NULL AUTO INCREMENT
) ENGINE : InnoDB;
```

- Melihat PRIMARY KEY Terakhir

```sql
SELECT LAST_INSERT_id();
```

## **27. String Function**

```sql
SELECT id,
  LOWER (nama_kolom) AS 'Name Lower'
  LENGTH (name) AS 'Name Length'
FROM nama_tabel;
```

## **28. DATE & TIME Function**

```sql
SELECT id, YEAR(created_at) AS "YEAR", MONTH(created_at) AS "Month" FROM nama_tabel;
```

## **29. Flow Control Function**

- Ini mirip IF ELSE di bahasa pemrograman

### **A. Control Flow CASE**

```sql
SELECT id,
  CASE category
        WHEN 'Makanan' THEN 'Enak'
        WHEN 'Minuman' THEN 'Segar'
        ELSE 'Apa Itu?'
        END AS 'category'
FROM products;
```

### **B. Control Flow IF**

```sql
SELECT id, price,
        IF (price <= 15000, 'Murah'
          IF(price <= 20000, 'Mahal','Mahal Banget'))AS 'Mahal?'
FROM products;
```

### **C. Control Flow IF NULL**

```sql
SELECT id, name, IFNULL(description, 'Kosong') FROM products;
```

## **30. Aggregate Function**

- Untuk melihat harga paling mahal, harga termurah, atau rata-rata harga produk, atau total jumlah data di tabel dll.

```sql
SELECT COUNT (id) AS 'Total Product' FROM products;
SELECT AVG (price) AS 'Rata-rata' FROM products;
SELECT MIN (price) AS 'Harga Tertinggi' FROM products;
```

## **31. Grouping**

- Untuk melihat total perkategori
- Hal ini bisa dilakukan dengan 'GROUP BY'

```sql
SELECT category
  COUNT(id) AS 'Total Product'
FROM products
GROUP BY category;
```

### **Having Clause**

- Untuk melakukan filter terhadap data yang sudah kita grouping
- Untuk memfilter hasil aggregate function, kita harus menggunakan 'HAVING'

```sql
SELECT category
  COUNT(id) AS total
FROM products
GROUP BY category
HAVING total > 1;
```

## **32. Constrain**

- Constraint digunakan untuk menjaga terjadinya duplikasi data

### **Unique Constraint**

- Unique Constraint adalah constraint yang memastikan bahwa data tetap unique
- Jika ingin memasukkna data duplikat akan ditolak oleh MySql

```sql
CREATE TABLE customers(
  id_customer INT NOT NULL AUTO INCREMENT,
  email VARCHAR(100) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50),
  PRIMARY KEY (id_customer),
  UNIQUE KEY email_unique(email)
) ENGINE : InnoDB;
```

### **Menambah / Menghapus Unique Constraint**

- Menambah

```sql
ALTER TABLE customers
  ADD CONSTRAINT email_unique UNIQUE (email);
```

- Menghapus

```sql
ALTER TABLE customers
  DROP CONSTRAINT email_unique;
```

### **Check Constraint**

- Check Constraint adalah constraint yang bisa kita tambahkan kondisi pengecekannya
- Ini cocok untuk mengecek data sebelum dimasukkan ke dalam database

### **Membuat Tabel dengan Check Constraint**

```sql
CREATE TABLE products(
  id_product VARCHAR (10) NOT NULL,
  name  VARCHAR(100) NOT NULL,
  description TEXT,
  price INT UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id_product),
  CONSTRAINT price_check CHECK (PRICE >= 1000)
) ENGINE = InnoDB;
```

### **Menambahkan / Menghapus Check Constraint**

- Menambah

```sql
ALTER TABLE products
  ADD CONSTRAINT price_check CHECK (price >= 1000);
```

- Menghapus

```sql
ALTER TABLE products
  DROP CONSTRAINT price_check;
```