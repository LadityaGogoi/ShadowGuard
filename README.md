# ShadowGuard Browser Extension

## 1. Problem Statement
Design and prototype innovative app or software-based solutions that can detect the use, type, and scale of dark patterns on e-commerce platforms.

## 2. Solution Brief
The ShadowGuard Browser Extension is a powerful tool designed to enhance user experience by identifying and highlighting potential dark patterns on websites. Our extension employs a combination of machine learning algorithms and natural language processing (NLP) models to detect and classify various deceptive design practices, ensuring a safer and more transparent online environment for users. The ShadowGuard Browser Extension has been enhanced with the integration of the Chrome new side panel API, providing users with an even more user-friendly and interactive experience.

## 3. Features
1. **Seamless Side Panel Interaction**:
   - The extension utilizes the Chrome new side panel API to create a seamless and accessible user interface.
   - Users can easily access the extension's features and information without disrupting their browsing experience.
2. **Confirm Shaming Highlights**:
   - Identified Confirm Shaming instances are displayed in the side panel with detailed information and recommendations.
   - Users can quickly understand the potential risks associated with specific buttons on the webpage.
3. **Basket Sneaking Alerts**:
   - Alerts related to Basket Sneaking are presented in a clear and concise manner within the side panel.
   - Users receive informative notifications about deceptive input fields without leaving the main page.
4. **False Urgency Summaries**:
   - False Urgency findings are summarized in the side panel, providing users with insights into the urgency tactics employed by the website.
   - Users can make informed decisions about time-sensitive offers with ease.
5. **Subscription Trap Warnings**:
   - Subscription trap detections trigger informative warnings in the side panel.
   - Users can review potential risks associated with subscriptions, fostering a more transparent online shopping experience.
6. **Bait and Switch Notifications**:
   - Bait and Switch alerts are displayed in the side panel at scheduled intervals, ensuring users stay informed about any changes on the webpage.
   - Real-time notifications enable users to make decisions based on the most up-to-date information.
7. **Forced Action Insights**:
   - Information regarding forced actions, such as excessive sign-up details, is presented in the side panel.
   - Users can understand the onboarding requirements and decide whether to proceed or explore alternative options.
8. **Disguised Ads Visibility**:
   - Disguised ads are highlighted on the webpage, and additional details are accessible through the side panel.
   - Users can easily differentiate between content and advertisements, promoting a more transparent online experience.
9. **Terms and Conditions Clarity**:
   - The NLP analysis of terms and conditions provides summarized insights in the side panel.
   - Users can quickly grasp the meaning behind complex legal language, fostering transparency and trust.

## 4. Methodology
### 4.1 Tech Stack
- **Extension**: HTML, CSS, JS
- **ML Models**: Python, Scikit-learn, Numpy, Pandas, Joblib, Flask

### 4.2 Sample UI


### 4.3 ML Models
#### 4.3.1 Dark Pattern Presence Detector
It implements a Multinomial Naive Bayes classification model for identifying dark patterns in user interfaces using Natural Language Processing (NLP). Leveraging the TfidfVectorizer, the script preprocesses the 'dark_patterns.csv' dataset, extracting meaningful features such as bi-grams and eliminating stop words. The model is trained on a subset of the data and achieves accurate predictions, as evidenced by the printed accuracy score. The confusion matrix heatmap provides a visual representation of the model's performance, offering insights into its ability to correctly categorize different dark pattern instances. This comprehensive approach demonstrates the model's potential in detecting and classifying deceptive design practices, providing a foundation for further refinement and optimization to enhance its overall effectiveness.

#### 4.3.2 Dark Pattern Classifier Model
This Python script demonstrates the creation and evaluation of a dark pattern classification model using the Bernoulli Naive Bayes algorithm. Two datasets ('normie.csv' and 'dark_patterns.csv') are combined, with instances labeled as "Not Dark" or "Dark" based on their respective sources. The data is preprocessed, and a binary classification approach is adopted. The script utilizes CountVectorizer and TfidfTransformer for feature extraction and transforms the data for model training. The Bernoulli Naive Bayes classifier is trained on a subset of the dataset, and its accuracy is evaluated on a test set. The confusion matrix and classification report are visualized through seaborn and matplotlib, providing insights into the model's predictive performance, with detailed precision, recall, and F1-score metrics.