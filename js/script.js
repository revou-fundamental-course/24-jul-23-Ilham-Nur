document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const imageWidth = images[0].clientWidth + 10; /* Lebar gambar ditambah jarak 10 piksel */
    let currentPosition = 0;
    let currentImageIndex = 0;
    const intervalTime = 3000; /* Waktu (dalam milidetik) antara setiap perpindahan slide */
  
    function slideImages() {
      currentPosition -= imageWidth;
      currentImageIndex++;
      
      /* Jika sudah menampilkan gambar terakhir, kembali ke gambar pertama */
      if (currentImageIndex >= images.length) {
        currentPosition = 0;
        currentImageIndex = 0;
      }
  
      slider.style.transition = 'transform 1s ease-in-out';
      slider.style.transform = `translateX(${currentPosition}px)`;
    }
  
    /* Jalankan fungsi slideImages secara terus-menerus setiap intervalTime */
    setInterval(slideImages, intervalTime);
  });

  function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');
  
    // Validasi nama
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return false;
    }
  
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Tolong Masukkan Email Yang Benar !!');
      emailInput.focus();
      return false;
    }
  
    // Validasi pilihan tujuan
    if (interestSelect.value === '') {
      alert('Silahkan Pilih Destinasinya!!!');
      interestSelect.focus();
      return false;
    }
  
    // Jika semua validasi berhasil, form akan dikirimkan
    return true;
  }
  