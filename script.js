
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-btn');
  const downloadModal = document.getElementById('download-modal');
  const closeModal = document.querySelector('.close-modal');
  const copyPasswordBtn = document.getElementById('copy-password');
  const directLink = document.getElementById('direct-link');
  
  // Show modal when download button is clicked
  downloadBtn.addEventListener('click', function() {
    // Simulate download start
    const link = document.createElement('a');
    link.href = 'https://bitbucket.org/gemlauncher/gemlauncher/downloads/FZToolsSwre.rar'; // This would be your actual download URL
    link.download = 'fztoolswr.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show the thank you modal
    downloadModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
  
  // Close modal when X is clicked
  closeModal.addEventListener('click', function() {
    downloadModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === downloadModal) {
      downloadModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Copy password to clipboard
  copyPasswordBtn.addEventListener('click', function() {
    const password = '2025';
    navigator.clipboard.writeText(password).then(function() {
      copyPasswordBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(function() {
        copyPasswordBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
      }, 2000);
    });
  });
  
  // Direct download link
  directLink.addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://site/fztoolswr.rar';
    link.download = 'fztoolswr.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
  // Add some animations and effects
  const fileCard = document.querySelector('.file-card');
  
  if (fileCard) {
    fileCard.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
    });
    
    fileCard.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });
  }
  
  // Animate features on scroll
  const features = document.querySelectorAll('.feature');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    features.forEach(feature => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(20px)';
      feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(feature);
    });
  }
});
