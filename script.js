document.addEventListener("DOMContentLoaded", () => {
    // Sticky trending destinations functionality
    const destinationGrid = document.querySelector(".destination-grid")
    const destinationCards = document.querySelectorAll(".destination-card")
  
    if (destinationGrid && destinationCards.length > 0) {
      // Initial position for each card
      const positions = []
  
      // Store initial positions
      destinationCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        positions.push({
          top: rect.top + window.scrollY,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          index: index,
        })
      })
  
      // Handle scroll event for sticky effect
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
        const gridRect = destinationGrid.getBoundingClientRect()
        const gridTop = gridRect.top + window.scrollY
        const gridBottom = gridTop + gridRect.height
  
        // Apply sticky effect only when the grid is in viewport
        if (scrollY > gridTop && scrollY < gridBottom) {
          destinationCards.forEach((card, index) => {
            const pos = positions[index]
            const offset = Math.min(scrollY - gridTop, 50) // Max 50px offset
  
            // Apply staggered sticky effect based on card index
            const staggeredOffset = offset * (1 - index * 0.1)
  
            if (staggeredOffset > 0) {
              card.style.transform = `translateY(${staggeredOffset}px)`
            } else {
              card.style.transform = "translateY(0)"
            }
          })
        } else {
          // Reset all cards when grid is out of viewport
          destinationCards.forEach((card) => {
            card.style.transform = "translateY(0)"
          })
        }
      })
    }
  
    // Search functionality
    const searchBtn = document.querySelector(".search-btn")
    const searchInput = document.querySelector(".search-input input")
  
    if (searchBtn && searchInput) {
      searchBtn.addEventListener("click", () => {
        const destination = searchInput.value.trim()
        if (destination) {
          alert(`Searching for accommodations in ${destination}`)
        } else {
          alert("Please enter a destination")
        }
      })
  
      // Allow search with Enter key
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          searchBtn.click()
        }
      })
    }
  
    // Date picker simulation
    const searchDates = document.querySelector(".search-dates")
  
    if (searchDates) {
      searchDates.addEventListener("click", () => {
        // Get current date and date 1 week from now
        const today = new Date()
        const nextWeek = new Date()
        nextWeek.setDate(today.getDate() + 7)
  
        // Format dates
        const formatDate = (date) => {
          return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        }
  
        const checkIn = formatDate(today)
        const checkOut = formatDate(nextWeek)
  
        // Update the text
        searchDates.querySelector("span").textContent = `${checkIn} — ${checkOut}`
      })
    }
  
    // Guests selector simulation
    const searchGuests = document.querySelector(".search-guests")
  
    if (searchGuests) {
      searchGuests.addEventListener("click", () => {
        const currentText = searchGuests.querySelector("span").textContent
  
        // Toggle between different guest configurations
        if (currentText.includes("2 adults")) {
          searchGuests.querySelector("span").textContent = "1 adult · 0 children · 1 room"
        } else if (currentText.includes("1 adult")) {
          searchGuests.querySelector("span").textContent = "2 adults · 1 child · 1 room"
        } else {
          searchGuests.querySelector("span").textContent = "2 adults · 0 children · 1 room"
        }
      })
    }
  })
  

  const grid = document.querySelector('.property-grid');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let scrollAmount = 0;
  const scrollStep = 300; // change this based on item width

  nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    grid.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    grid.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab_i9j1');
    const tabContents = document.querySelectorAll('.tab_content_m4n5');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active_k2l3'));
            tabContents.forEach(content => content.classList.remove('active_k2l3'));
            
            // Add active class to clicked tab
            tab.classList.add('active_k2l3');
            
            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active_k2l3');
        });
    });
    
    // Horizontal scrolling with next buttons
    const nextButtons = document.querySelectorAll('.next_a9b1');
    
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destinationsContainer = button.previousElementSibling;
            const scrollAmount = destinationsContainer.offsetWidth * 0.8;
            destinationsContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
    
    // Touch scrolling for mobile
    const destinationsContainers = document.querySelectorAll('.destinations_o6p7');
    
    destinationsContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables for both carousels
  const propertiesCarousel = {
      container: document.querySelector('.w9x7y5_carousel'),
      cards: document.querySelectorAll('.z1a3b5_card'),
      prevBtn: document.querySelector('.j0k2l4_prev'),
      nextBtn: document.querySelector('.j0k2l4_next'),
      currentIndex: 0,
      cardWidth: 0,
      visibleCards: 0,
      totalCards: document.querySelectorAll('.z1a3b5_card').length
  };
  
  const inspirationCarousel = {
      container: document.querySelector('.c5d7e9_carousel'),
      cards: document.querySelectorAll('.f1g3h5_card'),
      prevBtn: document.querySelector('.x7y9z1_prev'),
      nextBtn: document.querySelector('.x7y9z1_next'),
      currentIndex: 0,
      cardWidth: 0,
      visibleCards: 0,
      totalCards: document.querySelectorAll('.f1g3h5_card').length
  };
  
  // Heart button functionality
  const heartBtns = document.querySelectorAll('.i9j1k3_heart_btn');
  heartBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          this.classList.toggle('active');
          
          // Add heart animation
          if (this.classList.contains('active')) {
              this.innerHTML = '<i class="fas fa-heart"></i>';
              
              // Create and animate heart particles
              createHeartParticles(this);
          } else {
              this.innerHTML = '<i class="far fa-heart"></i>';
          }
      });
  });
  
  // Function to create heart particles animation
  function createHeartParticles(btn) {
      const numParticles = 5;
      
      for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('span');
          particle.classList.add('h8i0j2_heart_particle');
          particle.innerHTML = '❤️';
          particle.style.position = 'absolute';
          particle.style.fontSize = '12px';
          particle.style.pointerEvents = 'none';
          particle.style.zIndex = '100';
          particle.style.opacity = '1';
          
          // Random position around the button
          const angle = Math.random() * Math.PI * 2;
          const distance = 20 + Math.random() * 30;
          const startX = 18;
          const startY = 18;
          const endX = startX + Math.cos(angle) * distance;
          const endY = startY + Math.sin(angle) * distance;
          
          particle.style.left = `${startX}px`;
          particle.style.top = `${startY}px`;
          
          btn.appendChild(particle);
          
          // Animate the particle
          const animation = particle.animate([
              { 
                  transform: `translate(0, 0) scale(0.5)`,
                  opacity: 1
              },
              { 
                  transform: `translate(${endX - startX}px, ${endY - startY}px) scale(1)`,
                  opacity: 0
              }
          ], {
              duration: 1000 + Math.random() * 500,
              easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
          });
          
          animation.onfinish = () => {
              particle.remove();
          };
      }
  }
  
  // Function to calculate carousel dimensions
  function calculateCarouselDimensions() {
      // Properties carousel
      if (propertiesCarousel.cards.length > 0) {
          const cardStyle = window.getComputedStyle(propertiesCarousel.cards[0]);
          const cardWidth = propertiesCarousel.cards[0].offsetWidth + 
                            parseFloat(cardStyle.marginLeft) + 
                            parseFloat(cardStyle.marginRight);
          
          propertiesCarousel.cardWidth = cardWidth;
          
          // Calculate visible cards based on viewport width
          const containerWidth = propertiesCarousel.container.parentElement.offsetWidth;
          propertiesCarousel.visibleCards = Math.floor(containerWidth / cardWidth);
      }
      
      // Inspiration carousel
      if (inspirationCarousel.cards.length > 0) {
          const cardStyle = window.getComputedStyle(inspirationCarousel.cards[0]);
          const cardWidth = inspirationCarousel.cards[0].offsetWidth + 
                            parseFloat(cardStyle.marginLeft) + 
                            parseFloat(cardStyle.marginRight);
          
          inspirationCarousel.cardWidth = cardWidth;
          
          // Calculate visible cards based on viewport width
          const containerWidth = inspirationCarousel.container.parentElement.offsetWidth;
          inspirationCarousel.visibleCards = Math.floor(containerWidth / cardWidth);
      }
  }
  
  // Function to move carousel
  function moveCarousel(carousel, direction) {
      if (direction === 'next') {
          if (carousel.currentIndex < carousel.totalCards - carousel.visibleCards) {
              carousel.currentIndex++;
          } else {
              // Loop back to start with animation
              animateCarouselReset(carousel);
              return;
          }
      } else {
          if (carousel.currentIndex > 0) {
              carousel.currentIndex--;
          } else {
              // Optional: Loop to end
              // carousel.currentIndex = carousel.totalCards - carousel.visibleCards;
              return;
          }
      }
      
      const translateX = -carousel.currentIndex * (carousel.cardWidth + 20); // 20px is the gap
      carousel.container.style.transform = `translateX(${translateX}px)`;
  }
  
  // Function to animate carousel reset
  function animateCarouselReset(carousel) {
      // First move a bit further to indicate end
      const currentTranslate = -carousel.currentIndex * (carousel.cardWidth + 20);
      const furtherTranslate = currentTranslate - 30;
      
      carousel.container.style.transition = 'transform 0.3s ease';
      carousel.container.style.transform = `translateX(${furtherTranslate}px)`;
      
      // Then animate back to start
      setTimeout(() => {
          carousel.container.style.transition = 'transform 0s';
          carousel.container.style.transform = 'translateX(0)';
          carousel.currentIndex = 0;
          
          // Re-enable smooth transitions after reset
          setTimeout(() => {
              carousel.container.style.transition = 'transform 0.5s ease';
          }, 50);
      }, 300);
  }
  
  // Initialize carousels
  function initCarousels() {
      calculateCarouselDimensions();
      
      // Properties carousel navigation
      if (propertiesCarousel.prevBtn && propertiesCarousel.nextBtn) {
          propertiesCarousel.prevBtn.addEventListener('click', () => {
              moveCarousel(propertiesCarousel, 'prev');
          });
          
          propertiesCarousel.nextBtn.addEventListener('click', () => {
              moveCarousel(propertiesCarousel, 'next');
          });
      }
      
      // Inspiration carousel navigation
      if (inspirationCarousel.prevBtn && inspirationCarousel.nextBtn) {
          inspirationCarousel.prevBtn.addEventListener('click', () => {
              moveCarousel(inspirationCarousel, 'prev');
          });
          
          inspirationCarousel.nextBtn.addEventListener('click', () => {
              moveCarousel(inspirationCarousel, 'next');
          });
      }
      
      // Add touch swipe functionality
      addSwipeSupport(propertiesCarousel);
      addSwipeSupport(inspirationCarousel);
  }
  
  // Add touch swipe support
  function addSwipeSupport(carousel) {
      let startX, moveX, threshold = 100;
      let isDown = false;
      
      carousel.container.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          isDown = true;
          carousel.container.style.transition = 'none';
      });
      
      carousel.container.addEventListener('touchmove', (e) => {
          if (!isDown) return;
          moveX = e.touches[0].clientX;
          const diff = moveX - startX;
          const currentTranslate = -carousel.currentIndex * (carousel.cardWidth + 20);
          carousel.container.style.transform = `translateX(${currentTranslate + diff}px)`;
      });
      
      carousel.container.addEventListener('touchend', (e) => {
          isDown = false;
          carousel.container.style.transition = 'transform 0.5s ease';
          
          if (startX && moveX) {
              const diff = moveX - startX;
              if (diff > threshold) {
                  moveCarousel(carousel, 'prev');
              } else if (diff < -threshold) {
                  moveCarousel(carousel, 'next');
              } else {
                  // Reset to current position if swipe wasn't strong enough
                  const currentTranslate = -carousel.currentIndex * (carousel.cardWidth + 20);
                  carousel.container.style.transform = `translateX(${currentTranslate}px)`;
              }
          }
          
          startX = null;
          moveX = null;
      });
  }
  
  // Initialize on load
  initCarousels();
  
  // Reinitialize on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
          calculateCarouselDimensions();
          
          // Reset position after resize
          propertiesCarousel.currentIndex = 0;
          propertiesCarousel.container.style.transform = 'translateX(0)';
          
          inspirationCarousel.currentIndex = 0;
          inspirationCarousel.container.style.transform = 'translateX(0)';
      }, 250);
  });
  
  // Add scroll animation for cards
  function animateOnScroll() {
      const cards = document.querySelectorAll('.z1a3b5_card, .f1g3h5_card');
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      });
      
      cards.forEach(card => {
          observer.observe(card);
      });
  }
  
  // Initialize scroll animations
  animateOnScroll();
});