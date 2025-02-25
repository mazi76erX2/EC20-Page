import React from 'react';

export interface MenuItem {
    label: string;
    href: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}