function RequireAuth() {
  const { user } = useAuth();
  if (!user ? <Navigate to="/login" /> : <Fallback />) return <out />;
}

<Routes>
  <Route path="/login" element={<comp />}>
    <Route element={<RequireAuth />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
    </Route>
  </Route>
</Routes>;
