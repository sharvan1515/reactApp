import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define initial state for the website content
const initialState = {
    "title": "My Dynamic Website",
    "logo": "/images/logo.png",
    "socialMedia": {
        "facebook": "https://facebook.com/",
        "twitter": "https://twitter.com/",
        "instagram": "https://instagram.com/",
        "linkedin": "https://www.linkedin.com/"
    },
    "contact": {
        "email": "sharvan@gmail.com",
        "phone": "+91 - 9835401515"
    },
    "banner": {
        "title": "Learn the Latest Technologies",
        "subTitle": "Join our online courses and start your journey toward mastering in-demand skills.",
        "image": "/images/banner.jpg"
    },
    "whyChooseUs": [
        {
            "title": "Expert Instructors",
            "content": "Learn from professionals with real-world experience who provide quality lessons to guide you."
        },
        {
            "title": "Flexible Learning",
            "content": "Access your courses anytime, anywhere, and learn at your own pace, on your schedule."
        },
        {
            "title": "Affordable Pricing",
            "content": "We offer competitive pricing to give you the best value for your investment in your education."
        }
    ],
    "placementPartners": [
        {
            "company_logo": "https://growwithphp.in/uploads/images/client/5147193_1712295821_Untitled%20design%20(17).png",
            "company_name": "Partner 1"
        },
        {
            "company_logo": "https://growwithphp.in/uploads/images/client/9231104_1712295732_Untitled%20design%20(16).png",
            "company_name": "Partner 2"
        },
        {
            "company_logo": "https://growwithphp.in/uploads/images/client/2269869_1712295982_Untitled%20design%20(19).png",
            "company_name": "Partner 3"
        },
        {
            "company_logo": "https://growwithphp.in/uploads/images/client/4711412_1712296109_Untitled_design__20_-removebg-preview.png",
            "company_name": "Partner 4"
        },
        {
            "company_logo": "https://growwithphp.in/uploads/images/client/9491753_1712296278_Untitled%20design%20(21).png",
            "company_name": "Partner 5"
        }
    ],
    "testimonial": {

    },
    "footer": {
        "logo": "https://placehold.co/600x400",
        "title": "Empowering you to learn and grow with cutting-edge technologies.",
        "copyright": "© 2025 Your Company. All Rights Reserved. | Designed with ❤️ by YourTeam"
    },
    loading: false,
    error: null,
    isFetched: false
};

// Thunk for fetching website content from API
export const fetchWebsiteContent = createAsyncThunk('websiteContent/fetchWebsiteContent', async () => {
    const response = await fetch('http://localhost:3000/website-content');  // Replace with your API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch website content');
    }
    return await response.json();
});

// Create slice for website content
export const websiteContentSlice = createSlice({
    name: 'websiteContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWebsiteContent.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWebsiteContent.fulfilled, (state, action) => {
                state.loading = false;
                state.isFetched = true;  // Set data as fetched
                state.title = action.payload.title;
                state.logo = action.payload.logo;
                state.socialMedia = action.payload.socialMedia;
                state.contact = action.payload.contact;
                state.banner = action.payload.banner;

                state.whyChooseUs = action.payload.whyChooseUs;
                state.placementPartners = action.payload.placementPartners;
                state.testimonial = action.payload.testimonial;
                state.footer = action.payload.footer;
            })
            .addCase(fetchWebsiteContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

// Export the reducer
export default websiteContentSlice.reducer;
