import { Navbar } from "@/components/layout/Navbar";
import { ProductDetailClient } from "./ProductDetailClient";

// Pre-defined static dummy data to act as the "database" for the Phase 3 product pages.
// In a real application, this would be fetched from a headless CMS or database.
const getProductBySlug = (slug: string) => {
    const allProducts = [
        { name: "Colonial white", type: "granite" },
        { name: "Colonial gold", type: "granite" },
        { name: "Shiva gold", type: "granite" },
        { name: "Alaska white", type: "granite" },
        { name: "Alaska gold", type: "granite" },
        { name: "Crystal yellow", type: "granite" },
        { name: "Moon white", type: "granite" },
        { name: "P-white", type: "granite" },
        { name: "Lavender blue", type: "granite" },
        { name: "Misty yellow", type: "granite" },
        { name: "Pink guarana", type: "granite" },
        { name: "Desert brown", type: "granite" },
        { name: "White galaxy", type: "granite" },
        { name: "Grey sardo", type: "granite" },
        { name: "Steel grey", type: "granite" },
        { name: "Santa sicilia", type: "granite" },
        { name: "Urban classic", type: "granite" },
        { name: "Black beauty", type: "granite" },
        { name: "Black galaxy", type: "granite" },
        { name: "Tan brown", type: "granite" },
        { name: "Kuppam green", type: "granite" },
        { name: "Black pearl", type: "granite" },
        { name: "Blue pearl", type: "granite" },
        { name: "Rosy pink", type: "granite" },
        { name: "Paradiso", type: "granite" },
        { name: "Jhansi red", type: "granite" },
        // Marbles
        { name: "Crema marfil", type: "marble" },
        { name: "Crema uno", type: "marble" },
        { name: "Cappuccino", type: "marble" },
        { name: "Volakas white", type: "marble" },
        { name: "Carrara white", type: "marble" },
        { name: "Mugla white", type: "marble" },
        { name: "Omani beij", type: "marble" },
        { name: "Vietnam white", type: "marble" },
        { name: "Sunny gold", type: "marble" },
        { name: "Indian green", type: "marble" },
        { name: "Rosalia pink", type: "marble" },
        { name: "Indus gold", type: "marble" },
        { name: "Black and gold", type: "marble" },
        { name: "Armani grey", type: "marble" },
        { name: "Black marquina", type: "marble" },
        { name: "Maroon scuro", type: "marble" },
        { name: "Orchid jade", type: "marble" },
        { name: "Tundra grey", type: "marble" },
        { name: "Grey emperador", type: "marble" },
        { name: "Light emperador", type: "marble" },
        { name: "Dark emperador", type: "marble" },
        { name: "Travertine", type: "marble" },
        { name: "Perlato sicilia", type: "marble" },
        { name: "Afyun sugar", type: "marble" },
        { name: "Marmara white", type: "marble" },
        { name: "White wood", type: "marble" },
        { name: "Grey wood", type: "marble" },
    ];

    const decodedSlug = decodeURIComponent(slug).replace(/-/g, " ");
    return allProducts.find(p => p.name.toLowerCase() === decodedSlug.toLowerCase());
};

// Next.js App Router requires async params resolution
export default async function ProductDetail({ params }: { params: Promise<{ id: string, locale: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.id);

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 mt-32 text-center text-app-dark">Product Not Found</main>
            </div>
        );
    }

    return <ProductDetailClient product={product} />;
}

// End of file
