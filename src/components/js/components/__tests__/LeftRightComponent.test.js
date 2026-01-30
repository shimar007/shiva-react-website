import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LeftRightComponent from '../LeftRightComponent';

// Mock the profile image import
jest.mock('../../../images/shiva-profile.jpeg', () => 'mocked-profile-image.jpg');

// Mock the Logo and LogoFooter components
jest.mock('../Logo', () => () => <div data-testid="mock-logo">Logo</div>);
jest.mock('../LogoFooter', () => () => <div data-testid="mock-logo-footer">LogoFooter</div>);

describe('LeftRightComponent', () => {
    const renderComponent = () => {
        return render(
            <BrowserRouter>
                <LeftRightComponent />
            </BrowserRouter>
        );
    };

    beforeEach(() => {
        // Clear any previous document.title
        document.title = '';
    });

    it('renders without crashing', () => {
        renderComponent();
        expect(screen.getByText('Shivakumar Ramamurthy')).toBeInTheDocument();
    });

    it('sets the correct document title', () => {
        renderComponent();
        expect(document.title).toBe('Shivakumar Ramamurthy - Specialising in Web Applications and Websites mainly using ReactJs');
    });

    it('renders all main sections', () => {
        renderComponent();
        
        // Check for main sections
        expect(screen.getByText('Shivakumar Ramamurthy')).toBeInTheDocument();
        expect(screen.getByText('Specialising in ReactJs & React Native')).toBeInTheDocument();
        expect(screen.getByText('Technical know how')).toBeInTheDocument();
        expect(screen.getByText('About Me')).toBeInTheDocument();
        expect(screen.getByText('Contact Details')).toBeInTheDocument();
    });

    it('renders the profile image with correct attributes', () => {
        renderComponent();
        const profileImage = screen.getByAltText('Shivakumar Ramamurthy');
        expect(profileImage).toBeInTheDocument();
        expect(profileImage).toHaveAttribute('src', 'mocked-profile-image.jpg');
    });

    it('renders contact information correctly', () => {
        renderComponent();
        
        // Check contact details
        expect(screen.getByText('+61422672625')).toBeInTheDocument();
        expect(screen.getByText('shimar007@gmail.com')).toBeInTheDocument();
    });

    it('renders the resume download link with correct attributes', () => {
        renderComponent();
        const resumeLink = screen.getByText('Download Resume');
        expect(resumeLink).toBeInTheDocument();
        expect(resumeLink).toHaveAttribute('href', 'https://shivakumarr.com/sites/default/files/documents/Shivakumar-Ramamurthy_2.pdf');
        expect(resumeLink).toHaveAttribute('target', '_blank');
        expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders technical skills list', () => {
        renderComponent();
        
        // Check for some key technical skills
        expect(screen.getByText(/ReactJs/)).toBeInTheDocument();
        expect(screen.getByText(/React Native/)).toBeInTheDocument();
        expect(screen.getByText(/PHP/)).toBeInTheDocument();
        expect(screen.getByText(/MySQL/)).toBeInTheDocument();
    });

    it('renders the logo components', () => {
        renderComponent();
        expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
        expect(screen.getByTestId('mock-logo-footer')).toBeInTheDocument();
    });
}); 