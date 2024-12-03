import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PopulationGraph from "../PopulationGraph/PopulationGraph";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CountryData = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const defaultFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/World_Flag_%282004%29.svg/800px-World_Flag_%282004%29.svg.png";

  function getCountryInfo(countryCode) {
    const urlApi = new URL(`/get-countries/${countryCode}`, import.meta.env.VITE_API_URL).toString();

    setLoading(true);

    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCountryInfo(countryCode);
  }, [countryCode]);

  return (
    <div className="container-fluid">
      <button className="btn btn-lg btn-outline-primary mt-2">
        <Link to={'/'} className="text-decoration-none text-reset">
          Back to List
        </Link>
      </button>
      {
        loading == true ?
          <LoadingSpinner />
          :

          country ?
            <>
              <div className="container my-5">
                <div className="row mb-4">
                  <div className="col-md-8">
                    <h1 className="display-4">{country.commonName}</h1>
                    <h3 className="text-muted">{country.officialName}</h3>
                  </div>
                  <div className="col-md-4 text-center">
                    <img src={country.flag || defaultFlag} alt={`${country.commonName} flag`} className="img-fluid border" style={{ maxWidth: '300px' }} />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <p><strong>Country Code:</strong> {countryCode}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                  </div>
                </div>

                {country.borders && country.borders.length > 0 && (
                  <div className="row">
                    <div className="col">
                      <h3>Borders</h3>
                      <ul className="list-unstyled">
                        {country.borders.map((border, index) => (
                          <li key={index}>
                            <Link to={`/${border.countryCode}`} className="text-primary">
                              {border.commonName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col">
                    {
                      country.population.length ?
                      <PopulationGraph populationCounts={country.population} />
                      :
                      <p>No population data for this country.</p>
                    }
                  </div>
                </div>
              </div>
            </>
            :
            <ErrorMessage message={error} />
      }
    </div>
  );
};

export default CountryData;