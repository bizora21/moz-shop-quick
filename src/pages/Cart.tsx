import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingCart, Truck, CreditCard, Shield, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";

// Mock cart items - in a real app, this would come from context/state management
const mockCartItems = [
  {
    id: 1,
    name: "Cortador de Legumes Multifuncional",
    price: 450,
    image: product1,
    quantity: 1,
    badge: "Mais Vendido"
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Maputo"
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removido",
      description: "Produto removido do carrinho.",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Informações incompletas",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const orderDetails = cartItems.map(item => 
      `${item.name} (Qtd: ${item.quantity}) - ${item.price * item.quantity} MT`
    ).join('\n');

    const message = `🛒 *Novo Pedido - LojaRápida MZ*

📋 *Produtos:*
${orderDetails}

💰 *Total: ${calculateTotal()} MT*

👤 *Dados do Cliente:*
Nome: ${customerInfo.name}
Telefone: ${customerInfo.phone}
Endereço: ${customerInfo.address}
Cidade: ${customerInfo.city}

✅ Pagamento na entrega
🚚 Entrega grátis para ${customerInfo.city}

Obrigado por escolher a LojaRápida MZ!`;

    const url = `https://wa.me/+258863181415?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    toast({
      title: "✅ Pedido enviado!",
      description: "Seu pedido foi enviado via WhatsApp. Entraremos em contato em breve!",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">Adicione produtos ao carrinho para continuar</p>
            <Button onClick={() => navigate("/produtos")}>
              Continuar Comprando
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <Button variant="ghost" onClick={() => navigate("/produtos")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuar Comprando
          </Button>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-8">Meu Carrinho ({cartItems.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <Badge className="absolute -top-2 -right-2 text-xs">
                      {item.badge}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-lg font-bold text-primary">{item.price} MT</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-foreground">{item.price * item.quantity} MT</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Trust Badges */}
            <Card className="p-4 bg-accent/50 border-primary/20">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Entrega Grátis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Pague na Entrega</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Compra Segura</span>
                </div>
              </div>
            </Card>

            {/* Customer Information */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Informações de Entrega</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Nome *</label>
                  <Input 
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Telefone *</label>
                  <Input 
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    placeholder="+258 ..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Endereço *</label>
                  <Input 
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    placeholder="Rua, número, bairro"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Cidade</label>
                  <select 
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="Maputo">Maputo</option>
                    <option value="Beira">Beira</option>
                    <option value="Matola">Matola</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Order Total */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Resumo do Pedido</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{calculateTotal()} MT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Entrega</span>
                  <span className="text-primary font-medium">Grátis</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">{calculateTotal()} MT</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
                onClick={handleCheckout}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Finalizar Pedido
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-2">
                Ao finalizar, você será redirecionado para o WhatsApp
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cart;