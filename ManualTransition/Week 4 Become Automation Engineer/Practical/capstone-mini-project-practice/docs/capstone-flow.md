# Capstone Flow Explanation

## UI Automation Flow

- Open `https://automationexercise.com`
- Click Products menu
- Search using keyword `top`
- Validate `Searched Products` heading
- Capture product names
- Verify `Blue Top` is present

## API Verification Flow

- Send `POST /api/searchProduct`
- Pass form parameter `search_product=top`
- Validate HTTP status `200`
- Validate response body is not empty
- Validate response contains `products`
- Validate response contains `Blue Top`

## Combined Validation

- Store UI matched product
- Call API again
- Verify API response contains the same product found in UI
