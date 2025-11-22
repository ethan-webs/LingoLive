// LingoLive - Interactive Language Partner Filter
document.addEventListener('DOMContentLoaded', function() {
    // Sample partner data
    const partners = [
        { name: 'Maria', language: 'spanish', interest: 'travel', img: 'https://i.pravatar.cc/100?img=1', country: 'Spain' },
        { name: 'Jean', language: 'french', interest: 'culture', img: 'https://i.pravatar.cc/100?img=2', country: 'France' },
        { name: 'Yuki', language: 'japanese', interest: 'business', img: 'https://i.pravatar.cc/100?img=3', country: 'Japan' },
        { name: 'Ahmed', language: 'arabic', interest: 'food', img: 'https://i.pravatar.cc/100?img=4', country: 'Egypt' },
        { name: 'Sofia', language: 'italian', interest: 'music', img: 'https://i.pravatar.cc/100?img=5', country: 'Italy' },
        { name: 'Klaus', language: 'german', interest: 'sports', img: 'https://i.pravatar.cc/100?img=6', country: 'Germany' },
        { name: 'Ana', language: 'spanish', interest: 'business', img: 'https://i.pravatar.cc/100?img=7', country: 'Mexico' },
        { name: 'Pierre', language: 'french', interest: 'travel', img: 'https://i.pravatar.cc/100?img=8', country: 'Canada' },
        { name: 'Hiroshi', language: 'japanese', interest: 'culture', img: 'https://i.pravatar.cc/100?img=9', country: 'Japan' },
        { name: 'Fatima', language: 'arabic', interest: 'music', img: 'https://i.pravatar.cc/100?img=10', country: 'Morocco' },
        { name: 'Marco', language: 'italian', interest: 'food', img: 'https://i.pravatar.cc/100?img=11', country: 'Italy' },
        { name: 'Greta', language: 'german', interest: 'culture', img: 'https://i.pravatar.cc/100?img=12', country: 'Austria' }
    ];

    // Get filter elements
    const languageSelect = document.getElementById('language-select');
    const interestSelect = document.getElementById('interest-select');
    const filterResults = document.getElementById('filter-results');

    // Filter function
    function filterPartners() {
        const selectedLanguage = languageSelect.value;
        const selectedInterest = interestSelect.value;
        
        let filteredPartners = partners;
        
        // Apply language filter
        if (selectedLanguage) {
            filteredPartners = filteredPartners.filter(partner => 
                partner.language === selectedLanguage
            );
        }
        
        // Apply interest filter
        if (selectedInterest) {
            filteredPartners = filteredPartners.filter(partner => 
                partner.interest === selectedInterest
            );
        }
        
        displayResults(filteredPartners, selectedLanguage, selectedInterest);
    }

    // Display filtered results
    function displayResults(partners, language, interest) {
        if (partners.length === 0) {
            filterResults.innerHTML = `
                <div class="text-center">
                    <i class="fas fa-search" style="font-size: 2rem; color: #ccc; margin-bottom: 15px;"></i>
                    <p>No partners found matching your criteria.</p>
                    <small class="text-muted">Try adjusting your filters to see more results.</small>
                </div>
            `;
            return;
        }

        const languageText = language ? language.charAt(0).toUpperCase() + language.slice(1) : 'any language';
        const interestText = interest ? interest.charAt(0).toUpperCase() + interest.slice(1) : 'any interest';
        
        let resultsHTML = `
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-3">Found ${partners.length} partner${partners.length !== 1 ? 's' : ''} for ${languageText} ${interest ? 'with ' + interestText + ' interest' : ''}</h4>
                </div>
            </div>
            <div class="row">
        `;

        partners.forEach(partner => {
            resultsHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="partner-result-card">
                        <div class="partner-img-container">
                            <img src="${partner.img}" alt="${partner.name}" class="partner-img">
                            <div class="online-indicator"></div>
                        </div>
                        <div class="partner-info">
                            <h5 class="partner-name">${partner.name}</h5>
                            <p class="partner-details">
                                <span class="partner-language">${partner.language.charAt(0).toUpperCase() + partner.language.slice(1)}</span>
                                <span class="partner-country">${partner.country}</span>
                            </p>
                            <p class="partner-interest">
                                <i class="fas fa-heart"></i> ${partner.interest.charAt(0).toUpperCase() + partner.interest.slice(1)}
                            </p>
                            <button class="btn btn-sm btn-primary connect-btn">
                                <i class="fas fa-video"></i> Start Chat
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        resultsHTML += '</div>';
        filterResults.innerHTML = resultsHTML;
    }

    // Add event listeners
    languageSelect.addEventListener('change', filterPartners);
    interestSelect.addEventListener('change', filterPartners);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Scroll to pricing section
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add hover effects to tutor cards
    document.querySelectorAll('.tutor-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize with default message
    filterResults.innerHTML = `
        <div class="text-center">
            <i class="fas fa-users" style="font-size: 2rem; color: #42A5F5; margin-bottom: 15px;"></i>
            <p>Select a language and interest to see matching partners</p>
            <small class="text-muted">We have ${partners.length} amazing language partners ready to help you learn!</small>
        </div>
    `;
});

// Add CSS for partner result cards
const style = document.createElement('style');
style.textContent = `
    .partner-result-card {
        background: white;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .partner-result-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .partner-img-container {
        position: relative;
        margin-bottom: 15px;
    }
    
    .partner-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #66BB6A;
    }
    
    .online-indicator {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 15px;
        height: 15px;
        background-color: #66BB6A;
        border: 3px solid white;
        border-radius: 50%;
    }
    
    .partner-name {
        color: #424242;
        font-weight: 600;
        margin-bottom: 8px;
    }
    
    .partner-details {
        margin-bottom: 10px;
    }
    
    .partner-language {
        background-color: #42A5F5;
        color: white;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-right: 8px;
    }
    
    .partner-country {
        color: #666;
        font-size: 0.9rem;
    }
    
    .partner-interest {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 15px;
    }
    
    .partner-interest i {
        color: #66BB6A;
        margin-right: 5px;
    }
    
    .connect-btn {
        background-color: #42A5F5;
        border: none;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
        margin-top: auto;
    }
    
    .connect-btn:hover {
        background-color: #1976D2;
        transform: translateY(-2px);
    }
    
    .connect-btn i {
        margin-right: 5px;
    }
`;
document.head.appendChild(style);

